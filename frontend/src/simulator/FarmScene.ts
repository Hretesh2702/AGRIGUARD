/**
 * AgriGuard Simulator — Three.js 3D Farm Environment & Physics World
 *
 * Implements:
 * - Visually clean, stylized agricultural field with furrow soil rows, fence boundary, and crop plants
 * - Target crop plants with distinct states (HEALTHY, WARNING, DISEASED, TREATED)
 * - Authentic 3D AgriGuard Rover model with wheel animation
 * - Genuine 3-way Raycast Ultrasonic Sensor calculation (Left, Center, Right) against obstacles & crops
 * - Physical collision detection & Center Obstacle Hard-Stop
 * - Virtual camera target plant acquisition
 * - Localized precision spray mist particle physics
 * - Multiple camera perspectives: Chase (Follow), Overhead, Isometric, and Bumper (FPV)
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createAgriGuardRobot, RobotModelRefs } from '../digitalTwin/RobotGeometry';
import { FarmPlant, FieldZone, ObstacleObject, PlantHealthState } from './types';
import { SAFETY_THRESHOLDS } from '../digitalTwin/types';

export type SimCameraMode = 'CHASE' | 'OVERHEAD' | 'ISOMETRIC' | 'BUMPER';

export interface RaycastSensorDistances {
  leftCm: number;
  centerCm: number;
  rightCm: number;
}

export class FarmScene {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private robotRefs: RobotModelRefs;
  private animFrameId: number | null = null;
  private isDestroyed = false;

  // Farm Dimensions (in meters)
  public readonly fieldWidth = 14.0;  // X: -7 to +7
  public readonly fieldLength = 18.0; // Z: -9 to +9

  // Plant & Obstacle collections
  private plants: FarmPlant[] = [];
  private plantMeshes = new Map<string, THREE.Group>();
  private obstacles: ObstacleObject[] = [];
  private obstacleMeshes: THREE.Mesh[] = [];
  private raycastTargets: THREE.Object3D[] = [];

  // Robot Kinematics (One Source of Truth)
  public robotX = 0.0;
  public robotZ = -6.5;
  public robotHeading = 0.0; // radians (0 = facing +Z forward)
  public robotSpeed = 0.0;   // m/s
  public targetSpeed = 0.0;
  public turnRate = 0.0;     // rad/s
  public targetTurnRate = 0.0;
  public wheelAngle = 0.0;

  // Camera Management
  private cameraMode: SimCameraMode = 'CHASE';
  private bumperCamGroup: THREE.Group;

  // Ultrasonic Visual Rays
  private centerRayMesh: THREE.Line;
  private leftRayMesh: THREE.Line;
  private rightRayMesh: THREE.Line;
  private raycaster = new THREE.Raycaster();

  // Localized Spray Particle System
  private sprayActive = false;
  private sprayParticles: THREE.Points;
  private sprayPositions: Float32Array;
  private sprayVelocities: Float32Array;
  private sprayTargetPos = new THREE.Vector3(0, 0, 0);

  // Timing
  private lastTime = performance.now();

  constructor(container: HTMLElement) {
    this.container = container;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a101d);
    this.scene.fog = new THREE.FogExp2(0x0a101d, 0.035);

    // 2. Camera
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    this.camera.position.set(0, 5, -12);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // 4. OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02; // do not clip through soil
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 35.0;

    // 5. Environmental Lighting
    this.setupLighting();

    // 6. Build Farm Terrain & Fences
    this.setupFarmTerrain();

    // 7. Spawn Crops & Obstacles
    this.setupCropsAndObstacles();

    // 8. Add Authentic AgriGuard 3D Robot
    this.robotRefs = createAgriGuardRobot();
    this.scene.add(this.robotRefs.rootGroup);

    // Setup Bumper Inspection Camera Rig
    this.bumperCamGroup = new THREE.Group();
    this.bumperCamGroup.position.set(0, 1.4, 0.8);
    this.robotRefs.chassisGroup.add(this.bumperCamGroup);

    // 9. Ultrasonic Sensor Beams Visualizer
    this.setupUltrasonicRayVisualizers();

    // 10. Localized Targeted Spray System
    this.setupSpraySystem();

    // Update initial robot transform
    this.syncRobotTransform();

    // 11. Start 60fps Loop
    this.animate = this.animate.bind(this);
    this.animFrameId = requestAnimationFrame(this.animate);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Lighting & Agricultural Atmosphere
  // ───────────────────────────────────────────────────────────────────────────
  private setupLighting() {
    // Ambient natural daylight
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambientLight);

    // Warm Sun Directional Light
    const sunLight = new THREE.DirectionalLight(0xfff7ed, 1.3);
    sunLight.position.set(12, 18, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 45;
    sunLight.shadow.camera.left = -12;
    sunLight.shadow.camera.right = 12;
    sunLight.shadow.camera.top = 12;
    sunLight.shadow.camera.bottom = -12;
    sunLight.shadow.bias = -0.0004;
    this.scene.add(sunLight);

    // Soft Green Crop Fill Light
    const cropFill = new THREE.DirectionalLight(0x10b981, 0.35);
    cropFill.position.set(-10, 8, -10);
    this.scene.add(cropFill);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Farm Soil Terrain, Furrow Rows & Boundaries
  // ───────────────────────────────────────────────────────────────────────────
  private setupFarmTerrain() {
    // Main soil plane
    const soilGeom = new THREE.PlaneGeometry(this.fieldWidth + 2, this.fieldLength + 2, 32, 32);
    const soilMat = new THREE.MeshStandardMaterial({
      color: 0x271912, // Rich dark agricultural earth
      roughness: 0.95,
      metalness: 0.05,
    });
    const soilPlane = new THREE.Mesh(soilGeom, soilMat);
    soilPlane.rotation.x = -Math.PI / 2;
    soilPlane.position.y = 0;
    soilPlane.receiveShadow = true;
    this.scene.add(soilPlane);

    // Furrow soil mounds along crop rows
    const furrowRowsX = [-4.5, -1.5, 1.5, 4.5];
    const furrowMat = new THREE.MeshStandardMaterial({
      color: 0x3d271d,
      roughness: 0.9,
    });

    furrowRowsX.forEach((rx) => {
      const moundGeom = new THREE.BoxGeometry(0.85, 0.08, this.fieldLength * 0.92);
      const mound = new THREE.Mesh(moundGeom, furrowMat);
      mound.position.set(rx, 0.04, 0);
      mound.receiveShadow = true;
      this.scene.add(mound);
    });

    // Rover driving lane guide tracks (subtle compacted soil)
    const trackMat = new THREE.MeshBasicMaterial({ color: 0x1f140e });
    const lanesX = [-3.0, 0.0, 3.0];
    lanesX.forEach((lx) => {
      const laneGeom = new THREE.PlaneGeometry(1.2, this.fieldLength * 0.9);
      const lane = new THREE.Mesh(laneGeom, trackMat);
      lane.rotation.x = -Math.PI / 2;
      lane.position.set(lx, 0.002, 0);
      this.scene.add(lane);
    });

    // Boundary Wooden Fence Posts & Perimeter Collision Rails
    const fencePostMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.85 });
    const postGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.1, 10);

    const halfW = this.fieldWidth / 2;
    const halfL = this.fieldLength / 2;

    // Spawn fence perimeter
    const perimeterPosts: [number, number][] = [];
    for (let x = -halfW; x <= halfW; x += 2.5) {
      perimeterPosts.push([x, halfL]);
      perimeterPosts.push([x, -halfL]);
    }
    for (let z = -halfL; z <= halfL; z += 2.5) {
      perimeterPosts.push([halfW, z]);
      perimeterPosts.push([-halfW, z]);
    }

    perimeterPosts.forEach(([px, pz]) => {
      const post = new THREE.Mesh(postGeom, fencePostMat);
      post.position.set(px, 0.55, pz);
      post.castShadow = true;
      this.scene.add(post);
      this.raycastTargets.push(post);
    });

    // Horizontal fence rail bars
    const railMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.8 });
    const createRail = (w: number, l: number, x: number, z: number) => {
      const rGeom = new THREE.BoxGeometry(w, 0.05, l);
      const rail = new THREE.Mesh(rGeom, railMat);
      rail.position.set(x, 0.75, z);
      this.scene.add(rail);
      this.raycastTargets.push(rail);
    };

    createRail(this.fieldWidth, 0.05, 0, halfL);
    createRail(this.fieldWidth, 0.05, 0, -halfL);
    createRail(0.05, this.fieldLength, halfW, 0);
    createRail(0.05, this.fieldLength, -halfW, 0);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Crops & Physical Obstacles Setup
  // ───────────────────────────────────────────────────────────────────────────
  private setupCropsAndObstacles() {
    // 1. Target Crop Plants Population (4 Rows x 6 Plants = 24 Plants)
    const rows = [-4.5, -1.5, 1.5, 4.5];
    const zSpacing = 2.4;
    const zStart = -6.0;

    let plantIndex = 1;

    rows.forEach((rx, rIdx) => {
      for (let cIdx = 0; cIdx < 6; cIdx++) {
        const pz = zStart + cIdx * zSpacing;
        const id = `PLANT-#${String(plantIndex).padStart(3, '0')}`;

        // Designate specific sample plant health conditions for demo
        let state: PlantHealthState = 'HEALTHY';
        let healthScore = 92;
        let diseaseInfo = undefined;

        if (id === 'PLANT-#003') {
          // Primary Diseased Target (Row 1, near center approach)
          state = 'DISEASED';
          healthScore = 58;
          diseaseInfo = {
            name: 'Early Blight (Alternaria solani)',
            pathogen: 'Fungal Necrosis',
            confidence: 0.94,
            symptoms: 'Target-like concentric brown foliar spots, margin chlorosis, stem lesions',
            recommendedTreatment: 'Targeted Copper Hydroxide (2.5 g/L) micro-pulse fungicide',
            chemicalProduct: 'Kocide 3000 / Copper Hydroxide',
            recommendedDoseMl: 42,
            inventoryAvailable: true,
          };
        } else if (id === 'PLANT-#011') {
          // Warning Target (Row 2)
          state = 'WARNING';
          healthScore = 74;
          diseaseInfo = {
            name: 'Initial Septoria Leaf Spot',
            pathogen: 'Septoria lycopersici',
            confidence: 0.78,
            symptoms: 'Circular water-soaked chlorotic spots on lower leaves',
            recommendedTreatment: 'Preventative bio-fungicide Bacillus subtilis foliar mist',
            chemicalProduct: 'Serenade ASO',
            recommendedDoseMl: 35,
            inventoryAvailable: true,
          };
        } else if (id === 'PLANT-#016') {
          // Another diseased plant in Row 3
          state = 'DISEASED';
          healthScore = 52;
          diseaseInfo = {
            name: 'Tomato Yellow Leaf Curl',
            pathogen: 'Begomovirus',
            confidence: 0.89,
            symptoms: 'Upward leaf curling, severe stunting, interveinal chlorosis',
            recommendedTreatment: 'Localized azadirachtin insecticidal soap application',
            chemicalProduct: 'EcoNeem Organic',
            recommendedDoseMl: 40,
            inventoryAvailable: true,
          };
        }

        const plant: FarmPlant = {
          id,
          row: rIdx + 1,
          col: cIdx + 1,
          position: { x: rx, z: pz },
          state,
          cropType: 'Solanum lycopersicum',
          variety: 'San Marzano Tomato',
          healthScore,
          disease: diseaseInfo,
          treatmentHistory: [],
        };

        this.plants.push(plant);
        this.createPlant3DMesh(plant);
        plantIndex++;
      }
    });

    // 2. Physical Obstacles (Detectable by Ultrasonic & Solid Colliders)
    const obstacleDefs: ObstacleObject[] = [
      { id: 'OBS-ROCK-1', type: 'ROCK', position: { x: 0.0, y: 0.28, z: 2.5 }, radius: 0.42, height: 0.55 },
      { id: 'OBS-CRATE-1', type: 'CRATE', position: { x: -3.0, y: 0.32, z: -1.0 }, radius: 0.48, height: 0.65 },
      { id: 'OBS-IRRIG-1', type: 'IRRIGATION_BOX', position: { x: 3.0, y: 0.35, z: 4.8 }, radius: 0.38, height: 0.7 },
      { id: 'OBS-ROCK-2', type: 'ROCK', position: { x: 0.0, y: 0.25, z: -4.0 }, radius: 0.38, height: 0.5 },
    ];

    obstacleDefs.forEach((obs) => {
      this.obstacles.push(obs);
      this.createObstacle3DMesh(obs);
    });
  }

  // Helper: Build a 3D Tomato Plant with Foliage & Fruit
  private createPlant3DMesh(plant: FarmPlant) {
    const group = new THREE.Group();
    group.name = plant.id;
    group.position.set(plant.position.x, 0, plant.position.z);

    // Stem
    const stemGeom = new THREE.CylinderGeometry(0.025, 0.035, 0.85, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.7 });
    const stem = new THREE.Mesh(stemGeom, stemMat);
    stem.position.y = 0.42;
    stem.castShadow = true;
    group.add(stem);

    // Leaf Foliage Clusters (4 tiered leaf fan branches)
    const leafMat = this.getPlantFoliageMaterial(plant.state);

    const leafLayers = [
      { y: 0.35, scale: 0.7, rot: 0.2 },
      { y: 0.55, scale: 0.9, rot: -0.5 },
      { y: 0.72, scale: 0.8, rot: 0.8 },
      { y: 0.88, scale: 0.55, rot: 0.1 },
    ];

    leafLayers.forEach((layer) => {
      const clusterGeom = new THREE.SphereGeometry(0.32 * layer.scale, 8, 8);
      clusterGeom.scale(1.4, 0.6, 1.4);
      const cluster = new THREE.Mesh(clusterGeom, leafMat);
      cluster.position.y = layer.y;
      cluster.rotation.y = layer.rot;
      cluster.castShadow = true;
      group.add(cluster);
    });

    // Tomato Fruit (Small red or green globes)
    const fruitGeom = new THREE.SphereGeometry(0.065, 10, 10);
    const fruitColor = plant.state === 'DISEASED' ? 0x991b1b : (plant.state === 'WARNING' ? 0xeab308 : 0xdc2626);
    const fruitMat = new THREE.MeshStandardMaterial({ color: fruitColor, roughness: 0.25 });

    const fruit1 = new THREE.Mesh(fruitGeom, fruitMat);
    fruit1.position.set(0.12, 0.45, 0.1);
    group.add(fruit1);

    const fruit2 = new THREE.Mesh(fruitGeom, fruitMat);
    fruit2.position.set(-0.1, 0.52, -0.08);
    group.add(fruit2);

    // Plant Label Beacon (Subtle health ring at base)
    const ringGeom = new THREE.RingGeometry(0.35, 0.4, 16);
    const ringMat = new THREE.MeshBasicMaterial({
      color: this.getPlantColorHex(plant.state),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    group.add(ring);

    // Invisible Raycast Cylinder
    const colliderGeom = new THREE.CylinderGeometry(0.38, 0.38, 1.0, 8);
    const colliderMat = new THREE.MeshBasicMaterial({ visible: false });
    const collider = new THREE.Mesh(colliderGeom, colliderMat);
    collider.position.y = 0.5;
    collider.userData = { isPlant: true, plantId: plant.id };
    group.add(collider);

    this.scene.add(group);
    this.plantMeshes.set(plant.id, group);
    this.raycastTargets.push(collider);
  }

  private getPlantColorHex(state: PlantHealthState): number {
    switch (state) {
      case 'HEALTHY':
        return 0x10b981; // Emerald
      case 'WARNING':
        return 0xf59e0b; // Amber
      case 'DISEASED':
        return 0xf43f5e; // Crimson
      case 'TREATED':
        return 0x06b6d4; // Cyan/Blue foliar treatment sheen
    }
  }

  private getPlantFoliageMaterial(state: PlantHealthState): THREE.MeshStandardMaterial {
    switch (state) {
      case 'HEALTHY':
        return new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.6 });
      case 'WARNING':
        return new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.7 });
      case 'DISEASED':
        return new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
      case 'TREATED':
        return new THREE.MeshStandardMaterial({
          color: 0x0284c7, // Protective Copper/Biocide spray tint
          emissive: 0x0891b2,
          emissiveIntensity: 0.15,
          roughness: 0.4,
        });
    }
  }

  private createObstacle3DMesh(obs: ObstacleObject) {
    let mesh: THREE.Mesh;
    if (obs.type === 'ROCK') {
      const geom = new THREE.DodecahedronGeometry(obs.radius, 1);
      const mat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 });
      mesh = new THREE.Mesh(geom, mat);
    } else if (obs.type === 'CRATE') {
      const geom = new THREE.BoxGeometry(obs.radius * 2, obs.height, obs.radius * 2);
      const mat = new THREE.MeshStandardMaterial({ color: 0xa16207, roughness: 0.85 });
      mesh = new THREE.Mesh(geom, mat);
    } else {
      const geom = new THREE.CylinderGeometry(obs.radius, obs.radius, obs.height, 12);
      const mat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5, roughness: 0.5 });
      mesh = new THREE.Mesh(geom, mat);
    }

    mesh.position.set(obs.position.x, obs.position.y, obs.position.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { isObstacle: true, obstacleId: obs.id };

    this.scene.add(mesh);
    this.obstacleMeshes.push(mesh);
    this.raycastTargets.push(mesh);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Ultrasonic Sensor Ray Visualizers
  // ───────────────────────────────────────────────────────────────────────────
  private setupUltrasonicRayVisualizers() {
    const createBeam = (color: number) => {
      const geom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 2.5),
      ]);
      const mat = new THREE.LineBasicMaterial({ color, linewidth: 2, transparent: true, opacity: 0.65 });
      return new THREE.Line(geom, mat);
    };

    this.centerRayMesh = createBeam(0x10b981);
    this.leftRayMesh = createBeam(0x10b981);
    this.rightRayMesh = createBeam(0x10b981);

    this.scene.add(this.centerRayMesh);
    this.scene.add(this.leftRayMesh);
    this.scene.add(this.rightRayMesh);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Localized Targeted Spray System
  // ───────────────────────────────────────────────────────────────────────────
  private setupSpraySystem() {
    const count = 180;
    const geom = new THREE.BufferGeometry();
    this.sprayPositions = new Float32Array(count * 3);
    this.sprayVelocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      this.sprayPositions[i * 3 + 0] = 0;
      this.sprayPositions[i * 3 + 1] = -100; // initially hidden off-screen
      this.sprayPositions[i * 3 + 2] = 0;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(this.sprayPositions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.065,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.sprayParticles = new THREE.Points(geom, mat);
    this.scene.add(this.sprayParticles);
  }

  public activateSpray(targetPlant: FarmPlant | null) {
    this.sprayActive = true;
    (this.sprayParticles.material as THREE.PointsMaterial).opacity = 0.8;
    if (targetPlant) {
      this.sprayTargetPos.set(targetPlant.position.x, 0.5, targetPlant.position.z);
    } else {
      // Default spray under nozzle
      const forward = new THREE.Vector3(Math.sin(this.robotHeading), 0, Math.cos(this.robotHeading));
      this.sprayTargetPos.set(this.robotX + forward.x * 0.8, 0.4, this.robotZ + forward.z * 0.8);
    }
  }

  public deactivateSpray() {
    this.sprayActive = false;
    (this.sprayParticles.material as THREE.PointsMaterial).opacity = 0.0;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Raycast Distance Calculation (Genuine 3D Ray Intersections)
  // ───────────────────────────────────────────────────────────────────────────
  public computeUltrasonicDistances(): RaycastSensorDistances {
    const originY = 1.42; // Height of ultrasonic sensors mounted on horizontal PVC rails

    // Robot Heading Direction Vector (Forward = +Z in local coordinates)
    const forwardX = Math.sin(this.robotHeading);
    const forwardZ = Math.cos(this.robotHeading);

    // 1. Center Ray: Forward along robot heading
    const centerOrigin = new THREE.Vector3(
      this.robotX + forwardX * 1.40,
      originY,
      this.robotZ + forwardZ * 1.40
    );
    const centerDir = new THREE.Vector3(forwardX, 0, forwardZ).normalize();

    // 2. Left Ray: Facing 90° Left (-X in local frame)
    const leftDir = new THREE.Vector3(-forwardZ, 0, forwardX).normalize();
    const leftOrigin = new THREE.Vector3(
      this.robotX + leftDir.x * 1.10,
      originY,
      this.robotZ + leftDir.z * 1.10
    );

    // 3. Right Ray: Facing 90° Right (+X in local frame)
    const rightDir = new THREE.Vector3(forwardZ, 0, -forwardX).normalize();
    const rightOrigin = new THREE.Vector3(
      this.robotX + rightDir.x * 1.10,
      originY,
      this.robotZ + rightDir.z * 1.10
    );

    const maxRangeMeters = 2.5;

    const measureRay = (origin: THREE.Vector3, dir: THREE.Vector3, lineMesh: THREE.Line): number => {
      this.raycaster.set(origin, dir);
      this.raycaster.near = 0.05;
      this.raycaster.far = maxRangeMeters;

      const hits = this.raycaster.intersectObjects(this.raycastTargets, true);
      let distMeters = maxRangeMeters;

      if (hits.length > 0 && hits[0].distance < maxRangeMeters) {
        distMeters = hits[0].distance;
      }

      // Update line visualization in 3D
      const hitEnd = origin.clone().add(dir.clone().multiplyScalar(distMeters));
      const posAttr = lineMesh.geometry.attributes.position as THREE.BufferAttribute;
      posAttr.setXYZ(0, origin.x, origin.y, origin.z);
      posAttr.setXYZ(1, hitEnd.x, hitEnd.y, hitEnd.z);
      posAttr.needsUpdate = true;

      // Color code line by distance
      const distCm = Math.round(distMeters * 100);
      const mat = lineMesh.material as THREE.LineBasicMaterial;
      if (distCm < SAFETY_THRESHOLDS.OBSTACLE_CM) {
        mat.color.setHex(0xf43f5e); // Crimson Obstacle
      } else if (distCm <= SAFETY_THRESHOLDS.WARNING_CM) {
        mat.color.setHex(0xf59e0b); // Amber Warning
      } else {
        mat.color.setHex(0x10b981); // Emerald Safe
      }

      return distCm;
    };

    const centerCm = measureRay(centerOrigin, centerDir, this.centerRayMesh);
    const leftCm = measureRay(leftOrigin, leftDir, this.leftRayMesh);
    const rightCm = measureRay(rightOrigin, rightDir, this.rightRayMesh);

    return { centerCm, leftCm, rightCm };
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Virtual Camera: Detect Nearest Plant in Front
  // ───────────────────────────────────────────────────────────────────────────
  public getDetectedPlantInFront(): FarmPlant | null {
    const forwardX = Math.sin(this.robotHeading);
    const forwardZ = Math.cos(this.robotHeading);
    const camPos = new THREE.Vector2(this.robotX + forwardX * 1.0, this.robotZ + forwardZ * 1.0);

    let nearestPlant: FarmPlant | null = null;
    let minDistance = 1.85; // Maximum inspection view distance (meters)

    for (const plant of this.plants) {
      const pPos = new THREE.Vector2(plant.position.x, plant.position.z);
      const toPlant = pPos.clone().sub(camPos);
      const dist = toPlant.length();

      if (dist < minDistance) {
        // Angle check: Must be within ±40° cone in front of camera
        const toPlantDir = toPlant.normalize();
        const fwdDir = new THREE.Vector2(forwardX, forwardZ).normalize();
        const dot = toPlantDir.dot(fwdDir);

        if (dot > 0.65) { // Cosine of ~49 degrees
          minDistance = dist;
          nearestPlant = plant;
        }
      }
    }

    return nearestPlant;
  }

  // Update a plant's state in 3D (e.g. from DISEASED to TREATED)
  public updatePlantState(plantId: string, newState: PlantHealthState) {
    const plant = this.plants.find((p) => p.id === plantId);
    if (!plant) return;

    plant.state = newState;
    const meshGroup = this.plantMeshes.get(plantId);
    if (meshGroup) {
      // Update leaf cluster materials
      const newMat = this.getPlantFoliageMaterial(newState);
      meshGroup.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && mesh.geometry instanceof THREE.SphereGeometry) {
          mesh.material = newMat;
        }
      });
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Physics & Kinematic Step
  // ───────────────────────────────────────────────────────────────────────────
  public updateKinematics(deltaSec: number, centerUltrasonicCm: number): boolean {
    // 1. Safety Interlock: Hard Stop if Center Obstacle < 25 cm and moving forward
    let safetyStopTriggered = false;
    if (centerUltrasonicCm < SAFETY_THRESHOLDS.OBSTACLE_CM && this.targetSpeed > 0) {
      this.targetSpeed = 0;
      safetyStopTriggered = true;
    }

    // 2. Smooth acceleration / deceleration
    this.robotSpeed = THREE.MathUtils.lerp(this.robotSpeed, this.targetSpeed, 0.15);
    this.turnRate = THREE.MathUtils.lerp(this.turnRate, this.targetTurnRate, 0.15);

    // 3. Update Heading & Position
    if (Math.abs(this.turnRate) > 0.001) {
      this.robotHeading += this.turnRate * deltaSec;
    }

    if (Math.abs(this.robotSpeed) > 0.001) {
      const moveDelta = this.robotSpeed * deltaSec;
      const newX = this.robotX + Math.sin(this.robotHeading) * moveDelta;
      const newZ = this.robotZ + Math.cos(this.robotHeading) * moveDelta;

      // Boundary Collision Clamping (Keep within fence plot)
      const halfW = (this.fieldWidth / 2) - 1.2;
      const halfL = (this.fieldLength / 2) - 1.2;

      this.robotX = THREE.MathUtils.clamp(newX, -halfW, halfW);
      this.robotZ = THREE.MathUtils.clamp(newZ, -halfL, halfL);

      // Animate Wheel Rotation
      const wheelCircumference = Math.PI * 0.7; // ~0.35m radius
      const spinDelta = (moveDelta / wheelCircumference) * Math.PI * 2 * 4.0;
      this.wheelAngle += spinDelta;

      const { frontLeft, frontRight, rearLeft, rearRight } = this.robotRefs.wheels;
      frontLeft.rotation.x = this.wheelAngle;
      frontRight.rotation.x = this.wheelAngle;
      rearLeft.rotation.x = this.wheelAngle;
      rearRight.rotation.x = this.wheelAngle;
    }

    // Synchronize 3D Robot Model
    this.syncRobotTransform();

    // Animate Spray Mist if active
    if (this.sprayActive) {
      this.animateSprayParticles(deltaSec);
    }

    return safetyStopTriggered;
  }

  private syncRobotTransform() {
    this.robotRefs.rootGroup.position.set(this.robotX, 0, this.robotZ);
    this.robotRefs.rootGroup.rotation.y = this.robotHeading;

    // Robot stands level and straight
    this.robotRefs.chassisGroup.rotation.set(0, 0, 0);
  }

  private animateSprayParticles(delta: number) {
    const pos = this.sprayPositions;
    const vel = this.sprayVelocities;
    const count = pos.length / 3;

    // Nozzle world position (under chassis)
    const forwardX = Math.sin(this.robotHeading);
    const forwardZ = Math.cos(this.robotHeading);
    const nozzleX = this.robotX + forwardX * 0.6;
    const nozzleY = 0.65;
    const nozzleZ = this.robotZ + forwardZ * 0.6;

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] += vel[i * 3 + 0] * delta;
      pos[i * 3 + 1] += vel[i * 3 + 1] * delta;
      pos[i * 3 + 2] += vel[i * 3 + 2] * delta;

      // Reset when particle hits ground
      if (pos[i * 3 + 1] < 0.05) {
        pos[i * 3 + 0] = nozzleX + (Math.random() - 0.5) * 0.1;
        pos[i * 3 + 1] = nozzleY;
        pos[i * 3 + 2] = nozzleZ + (Math.random() - 0.5) * 0.1;

        // Directed velocity cone toward target plant
        const toTarget = this.sprayTargetPos.clone().sub(new THREE.Vector3(nozzleX, nozzleY, nozzleZ)).normalize();
        const spread = 0.35;
        vel[i * 3 + 0] = toTarget.x * 2.5 + (Math.random() - 0.5) * spread;
        vel[i * 3 + 1] = -1.2 - Math.random() * 1.0;
        vel[i * 3 + 2] = toTarget.z * 2.5 + (Math.random() - 0.5) * spread;
      }
    }
    this.sprayParticles.geometry.attributes.position.needsUpdate = true;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Camera View Management
  // ───────────────────────────────────────────────────────────────────────────
  public setCameraMode(mode: SimCameraMode) {
    this.cameraMode = mode;
    this.controls.enabled = (mode === 'ISOMETRIC' || mode === 'OVERHEAD');

    if (mode === 'OVERHEAD') {
      this.camera.position.set(0, 22, 0.1);
      this.controls.target.set(0, 0, 0);
    } else if (mode === 'ISOMETRIC') {
      this.camera.position.set(10, 9, -10);
      this.controls.target.set(0, 0.5, 0);
    }
  }

  public getCameraMode(): SimCameraMode {
    return this.cameraMode;
  }

  private updateCameraChase() {
    if (this.cameraMode === 'CHASE') {
      // 3rd-person chase cam behind the robot
      const backDist = 4.8;
      const camHeight = 3.2;
      const fwdX = Math.sin(this.robotHeading);
      const fwdZ = Math.cos(this.robotHeading);

      const targetCamPos = new THREE.Vector3(
        this.robotX - fwdX * backDist,
        camHeight,
        this.robotZ - fwdZ * backDist
      );

      this.camera.position.lerp(targetCamPos, 0.12);
      this.camera.lookAt(this.robotX + fwdX * 1.5, 1.2, this.robotZ + fwdZ * 1.5);
    } else if (this.cameraMode === 'BUMPER') {
      // 1st-person FPV bumper cam looking out front
      const fwdX = Math.sin(this.robotHeading);
      const fwdZ = Math.cos(this.robotHeading);

      this.camera.position.set(this.robotX + fwdX * 0.9, 1.45, this.robotZ + fwdZ * 0.9);
      this.camera.lookAt(this.robotX + fwdX * 5.0, 0.9, this.robotZ + fwdZ * 5.0);
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Reset Routines
  // ───────────────────────────────────────────────────────────────────────────
  public resetRobotPosition() {
    this.robotX = 0.0;
    this.robotZ = -6.5;
    this.robotHeading = 0.0;
    this.robotSpeed = 0.0;
    this.targetSpeed = 0.0;
    this.turnRate = 0.0;
    this.targetTurnRate = 0.0;
    this.syncRobotTransform();
  }

  public resetField() {
    this.resetRobotPosition();
    this.deactivateSpray();
    // Reset all plants to their original state
    this.plants.forEach((p) => {
      if (p.id === 'PLANT-#003' || p.id === 'PLANT-#016') {
        this.updatePlantState(p.id, 'DISEASED');
      } else if (p.id === 'PLANT-#011') {
        this.updatePlantState(p.id, 'WARNING');
      } else {
        this.updatePlantState(p.id, 'HEALTHY');
      }
    });
  }

  public getAllPlants(): FarmPlant[] {
    return [...this.plants];
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Main Animation Loop
  // ───────────────────────────────────────────────────────────────────────────
  private animate(currentTime: number) {
    if (this.isDestroyed) return;
    this.animFrameId = requestAnimationFrame(this.animate);

    const delta = Math.min((currentTime - this.lastTime) / 1000, 0.1);
    this.lastTime = currentTime;

    if (this.controls.enabled) {
      this.controls.update();
    } else {
      this.updateCameraChase();
    }

    this.renderer.render(this.scene, this.camera);
  }

  public resize() {
    if (!this.container || this.isDestroyed) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  public destroy() {
    this.isDestroyed = true;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    this.controls.dispose();

    // Traverse and dispose geometries and materials
    this.scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      }
    });

    this.renderer.dispose();
    if (this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
