/**
 * AgriGuard Digital Twin — 3D Robot Geometry & Assembly
 *
 * Faithfully represents the physical AgriGuard prototype:
 * - 4-wheel mobile platform (L298N geared DC wheels)
 * - Main rectangular aluminum chassis
 * - Upper structural tubular frame
 * - Monocrystalline solar panel array & 12V battery
 * - Weather-resistant electronics enclosure with pulsing ESP32 LED
 * - Front camera mast & external USB RGB inspection camera
 * - 3x HC-SR04 ultrasonic sensors (Left, Center, Right) with live ranging cones
 * - Precision spray system: translucent tank, 12V diaphragm pump, relay, and atomizing mist
 * - Environmental sensing brackets (DHT22, capacitive soil probe, MPU6050)
 */

import * as THREE from 'three';
import { SAFETY_THRESHOLDS } from './types';

export interface UltrasonicConeRefs {
  leftMesh: THREE.Mesh;
  centerMesh: THREE.Mesh;
  rightMesh: THREE.Mesh;
  leftMaterial: THREE.MeshBasicMaterial;
  centerMaterial: THREE.MeshBasicMaterial;
  rightMaterial: THREE.MeshBasicMaterial;
}

export interface SprayParticleRefs {
  particleSystem: THREE.Points;
  particleGeometry: THREE.BufferGeometry;
  particleMaterial: THREE.PointsMaterial;
  positions: Float32Array;
  velocities: Float32Array;
  count: number;
}

export interface RobotModelRefs {
  rootGroup: THREE.Group;
  chassisGroup: THREE.Group;
  wheels: {
    frontLeft: THREE.Group;
    frontRight: THREE.Group;
    rearLeft: THREE.Group;
    rearRight: THREE.Group;
  };
  ultrasonicCones: UltrasonicConeRefs;
  sprayParticles: SprayParticleRefs;
  statusLedMaterial: THREE.MeshBasicMaterial;
  sprayNozzleMesh: THREE.Mesh;
  tankLiquidMesh: THREE.Mesh;
}

export function createAgriGuardRobot(): RobotModelRefs {
  const rootGroup = new THREE.Group();
  rootGroup.name = 'AgriGuardRobotRoot';

  // Sub-group that tilts with MPU6050 pitch/roll
  const chassisGroup = new THREE.Group();
  chassisGroup.name = 'ChassisTiltingGroup';
  rootGroup.add(chassisGroup);

  // ───────────────────────────────────────────────────────────────────────────
  // Shared Palette Materials
  // ───────────────────────────────────────────────────────────────────────────
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.5,
    metalness: 0.8,
  });

  const aluminumMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    roughness: 0.35,
    metalness: 0.9,
  });

  const emeraldAccentMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    roughness: 0.4,
    metalness: 0.6,
  });

  const tireRubberMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    roughness: 0.9,
    metalness: 0.1,
  });

  const wheelRimMat = new THREE.MeshStandardMaterial({
    color: 0x475569,
    roughness: 0.3,
    metalness: 0.85,
  });

  const yellowSafetyMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    roughness: 0.4,
    metalness: 0.3,
  });

  // ───────────────────────────────────────────────────────────────────────────
  // 1. Main Rectangular Chassis Deck
  // ───────────────────────────────────────────────────────────────────────────
  const deckWidth = 2.4;
  const deckLength = 3.8;
  const deckHeight = 0.35;
  const deckElevation = 0.85;

  const deckGeom = new THREE.BoxGeometry(deckWidth, deckHeight, deckLength);
  const deckMesh = new THREE.Mesh(deckGeom, darkMetalMat);
  deckMesh.position.set(0, deckElevation, 0);
  deckMesh.castShadow = true;
  deckMesh.receiveShadow = true;
  chassisGroup.add(deckMesh);

  // Emerald accent trim plates on sides
  const trimGeom = new THREE.BoxGeometry(0.06, 0.2, deckLength * 0.85);
  const leftTrim = new THREE.Mesh(trimGeom, emeraldAccentMat);
  leftTrim.position.set(-deckWidth / 2 - 0.03, deckElevation, 0);
  chassisGroup.add(leftTrim);

  const rightTrim = new THREE.Mesh(trimGeom, emeraldAccentMat);
  rightTrim.position.set(deckWidth / 2 + 0.03, deckElevation, 0);
  chassisGroup.add(rightTrim);

  // Front bumper bar
  const bumperGeom = new THREE.CylinderGeometry(0.07, 0.07, deckWidth + 0.4, 16);
  const frontBumper = new THREE.Mesh(bumperGeom, aluminumMat);
  frontBumper.rotation.z = Math.PI / 2;
  frontBumper.position.set(0, deckElevation, deckLength / 2 + 0.25);
  frontBumper.castShadow = true;
  chassisGroup.add(frontBumper);

  // Rear bumper bar
  const rearBumper = frontBumper.clone();
  rearBumper.position.set(0, deckElevation, -deckLength / 2 - 0.25);
  chassisGroup.add(rearBumper);

  // Underbody battery pack (12V LiFePO4)
  const batteryGeom = new THREE.BoxGeometry(1.6, 0.4, 2.0);
  const batteryMat = new THREE.MeshStandardMaterial({
    color: 0x090d16,
    roughness: 0.7,
    metalness: 0.2,
  });
  const batteryMesh = new THREE.Mesh(batteryGeom, batteryMat);
  batteryMesh.position.set(0, deckElevation - 0.35, -0.2);
  chassisGroup.add(batteryMesh);

  // Battery terminal contacts
  const termGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.12, 12);
  const termPos = new THREE.Mesh(termGeom, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
  termPos.position.set(0.4, deckElevation - 0.12, -0.2);
  chassisGroup.add(termPos);

  const termNeg = new THREE.Mesh(termGeom, new THREE.MeshBasicMaterial({ color: 0x3b82f6 }));
  termNeg.position.set(-0.4, deckElevation - 0.12, -0.2);
  chassisGroup.add(termNeg);

  // ───────────────────────────────────────────────────────────────────────────
  // 2. 4-Wheel Drive Assembly
  // ───────────────────────────────────────────────────────────────────────────
  function createWheel(): THREE.Group {
    const wheelGroup = new THREE.Group();

    // Tire (thick cylinder)
    const tireRadius = 0.65;
    const tireThickness = 0.48;
    const tireGeom = new THREE.CylinderGeometry(tireRadius, tireRadius, tireThickness, 24);
    const tireMesh = new THREE.Mesh(tireGeom, tireRubberMat);
    tireMesh.rotation.z = Math.PI / 2;
    tireMesh.castShadow = true;
    wheelGroup.add(tireMesh);

    // Tread knobs along circumference
    const treadCount = 12;
    const treadGeom = new THREE.BoxGeometry(tireThickness * 0.95, 0.06, 0.14);
    for (let i = 0; i < treadCount; i++) {
      const angle = (i / treadCount) * Math.PI * 2;
      const tread = new THREE.Mesh(treadGeom, tireRubberMat);
      tread.position.set(
        0,
        Math.cos(angle) * (tireRadius + 0.02),
        Math.sin(angle) * (tireRadius + 0.02)
      );
      tread.rotation.x = -angle;
      wheelGroup.add(tread);
    }

    // Rim hub
    const rimGeom = new THREE.CylinderGeometry(tireRadius * 0.6, tireRadius * 0.6, tireThickness + 0.04, 16);
    const rimMesh = new THREE.Mesh(rimGeom, wheelRimMat);
    rimMesh.rotation.z = Math.PI / 2;
    wheelGroup.add(rimMesh);

    // Center hub cap & hex bolts
    const hubCapGeom = new THREE.CylinderGeometry(0.18, 0.18, tireThickness + 0.08, 12);
    const hubCap = new THREE.Mesh(hubCapGeom, yellowSafetyMat);
    hubCap.rotation.z = Math.PI / 2;
    wheelGroup.add(hubCap);

    return wheelGroup;
  }

  const wheelTrackX = 1.48;
  const wheelBaseZ = 1.35;
  const wheelAxleY = 0.65;

  const wheelFL = createWheel();
  wheelFL.name = 'Wheel_FL';
  wheelFL.position.set(-wheelTrackX, wheelAxleY, wheelBaseZ);
  rootGroup.add(wheelFL);

  const wheelFR = createWheel();
  wheelFR.name = 'Wheel_FR';
  wheelFR.position.set(wheelTrackX, wheelAxleY, wheelBaseZ);
  rootGroup.add(wheelFR);

  const wheelRL = createWheel();
  wheelRL.name = 'Wheel_RL';
  wheelRL.position.set(-wheelTrackX, wheelAxleY, -wheelBaseZ);
  rootGroup.add(wheelRL);

  const wheelRR = createWheel();
  wheelRR.name = 'Wheel_RR';
  wheelRR.position.set(wheelTrackX, wheelAxleY, -wheelBaseZ);
  rootGroup.add(wheelRR);

  // Motor drive hub brackets connecting chassis to wheels
  const axleGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.35, 12);
  const makeAxle = (x: number, z: number) => {
    const ax = new THREE.Mesh(axleGeom, darkMetalMat);
    ax.rotation.z = Math.PI / 2;
    ax.position.set(x, deckElevation, z);
    chassisGroup.add(ax);
  };
  makeAxle(-1.25, wheelBaseZ);
  makeAxle(1.25, wheelBaseZ);
  makeAxle(-1.25, -wheelBaseZ);
  makeAxle(1.25, -wheelBaseZ);

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Upper Tubular Structural Frame & Roll-Bars
  // ───────────────────────────────────────────────────────────────────────────
  const frameHeight = 1.5;
  const postGeom = new THREE.CylinderGeometry(0.05, 0.05, frameHeight, 12);

  const postPositions: [number, number][] = [
    [-1.0, 1.4],
    [1.0, 1.4],
    [-1.0, -1.4],
    [1.0, -1.4],
  ];

  postPositions.forEach(([x, z]) => {
    const post = new THREE.Mesh(postGeom, aluminumMat);
    post.position.set(x, deckElevation + frameHeight / 2, z);
    post.castShadow = true;
    chassisGroup.add(post);
  });

  // Top cross rails connecting frame
  const railLongGeom = new THREE.CylinderGeometry(0.045, 0.045, 2.8, 12);
  const leftRail = new THREE.Mesh(railLongGeom, aluminumMat);
  leftRail.position.set(-1.0, deckElevation + frameHeight, 0);
  leftRail.rotation.x = Math.PI / 2;
  chassisGroup.add(leftRail);

  const rightRail = leftRail.clone();
  rightRail.position.set(1.0, deckElevation + frameHeight, 0);
  chassisGroup.add(rightRail);

  const railShortGeom = new THREE.CylinderGeometry(0.045, 0.045, 2.0, 12);
  const frontRail = new THREE.Mesh(railShortGeom, aluminumMat);
  frontRail.position.set(0, deckElevation + frameHeight, 1.4);
  frontRail.rotation.z = Math.PI / 2;
  chassisGroup.add(frontRail);

  const rearRail = frontRail.clone();
  rearRail.position.set(0, deckElevation + frameHeight, -1.4);
  chassisGroup.add(rearRail);

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Power & Solar Panel Area
  // ───────────────────────────────────────────────────────────────────────────
  const solarPanelWidth = 2.2;
  const solarPanelLength = 3.0;
  const solarBezelGeom = new THREE.BoxGeometry(solarPanelWidth, 0.06, solarPanelLength);
  const solarBezel = new THREE.Mesh(solarBezelGeom, aluminumMat);
  solarBezel.position.set(0, deckElevation + frameHeight + 0.06, 0);
  chassisGroup.add(solarBezel);

  // Photovoltaic cell surface (deep blue crystal)
  const cellSurfaceGeom = new THREE.BoxGeometry(solarPanelWidth - 0.12, 0.02, solarPanelLength - 0.12);
  const cellSurfaceMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    emissive: 0x0284c7,
    emissiveIntensity: 0.12,
    roughness: 0.15,
    metalness: 0.9,
  });
  const cellSurface = new THREE.Mesh(cellSurfaceGeom, cellSurfaceMat);
  cellSurface.position.set(0, deckElevation + frameHeight + 0.1, 0);
  chassisGroup.add(cellSurface);

  // Solar grid lines (wireframe overlay)
  const gridHelper = new THREE.GridHelper(2.5, 8, 0x38bdf8, 0x1e3a8a);
  gridHelper.position.set(0, deckElevation + frameHeight + 0.115, 0);
  gridHelper.scale.set(0.8, 1, 1.15);
  chassisGroup.add(gridHelper);

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Electronics Enclosure (ESP32, Motor Driver, Power Distribution)
  // ───────────────────────────────────────────────────────────────────────────
  const encBoxGeom = new THREE.BoxGeometry(1.3, 0.45, 1.4);
  const encBoxMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.6,
    metalness: 0.3,
  });
  const encBox = new THREE.Mesh(encBoxGeom, encBoxMat);
  encBox.position.set(0, deckElevation + 0.38, 0.2);
  chassisGroup.add(encBox);

  // Smoked transparent acrylic enclosure lid
  const encLidGeom = new THREE.BoxGeometry(1.34, 0.05, 1.44);
  const encLidMat = new THREE.MeshPhysicalMaterial({
    color: 0x0284c7,
    transparent: true,
    opacity: 0.45,
    roughness: 0.2,
    transmission: 0.6,
  });
  const encLid = new THREE.Mesh(encLidGeom, encLidMat);
  encLid.position.set(0, deckElevation + 0.62, 0.2);
  chassisGroup.add(encLid);

  // Pulsing status LED (ESP32 Heartbeat)
  const ledGeom = new THREE.SphereGeometry(0.04, 12, 12);
  const statusLedMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
  });
  const statusLed = new THREE.Mesh(ledGeom, statusLedMaterial);
  statusLed.position.set(0.35, deckElevation + 0.66, 0.4);
  chassisGroup.add(statusLed);

  // L298N aluminum heatsink fins inside enclosure
  const sinkGeom = new THREE.BoxGeometry(0.35, 0.22, 0.35);
  const sinkMesh = new THREE.Mesh(sinkGeom, aluminumMat);
  sinkMesh.position.set(-0.3, deckElevation + 0.5, 0.2);
  chassisGroup.add(sinkMesh);

  // ───────────────────────────────────────────────────────────────────────────
  // 6. Spray System (Tank, Pump, Relay, Solenoid, Nozzle, Spray Particles)
  // ───────────────────────────────────────────────────────────────────────────
  // Translucent chemical/water tank
  const tankRadius = 0.55;
  const tankHeight = 0.85;
  const tankGeom = new THREE.CylinderGeometry(tankRadius, tankRadius, tankHeight, 20);
  const tankMat = new THREE.MeshPhysicalMaterial({
    color: 0xf8fafc,
    transparent: true,
    opacity: 0.55,
    roughness: 0.15,
    transmission: 0.8,
  });
  const tankMesh = new THREE.Mesh(tankGeom, tankMat);
  tankMesh.position.set(0, deckElevation + 0.65, -0.95);
  tankMesh.castShadow = true;
  chassisGroup.add(tankMesh);

  // Liquid level inside tank
  const liquidGeom = new THREE.CylinderGeometry(tankRadius * 0.95, tankRadius * 0.95, tankHeight * 0.65, 16);
  const liquidMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.75,
    roughness: 0.1,
  });
  const tankLiquidMesh = new THREE.Mesh(liquidGeom, liquidMat);
  tankLiquidMesh.position.set(0, deckElevation + 0.5, -0.95);
  chassisGroup.add(tankLiquidMesh);

  // Tank fill cap
  const capGeom = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
  const capMesh = new THREE.Mesh(capGeom, new THREE.MeshStandardMaterial({ color: 0x090d16 }));
  capMesh.position.set(0, deckElevation + 1.12, -0.95);
  chassisGroup.add(capMesh);

  // 12V Mini Diaphragm Pump unit
  const pumpMotorGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.45, 16);
  const pumpMotor = new THREE.Mesh(pumpMotorGeom, darkMetalMat);
  pumpMotor.position.set(0.65, deckElevation + 0.25, -1.5);
  pumpMotor.rotation.x = Math.PI / 2;
  chassisGroup.add(pumpMotor);

  const pumpHeadGeom = new THREE.BoxGeometry(0.35, 0.25, 0.22);
  const pumpHead = new THREE.Mesh(pumpHeadGeom, new THREE.MeshStandardMaterial({ color: 0x334155 }));
  pumpHead.position.set(0.65, deckElevation + 0.25, -1.2);
  chassisGroup.add(pumpHead);

  // Solenoid valve / relay block
  const relayGeom = new THREE.BoxGeometry(0.25, 0.2, 0.25);
  const relayMesh = new THREE.Mesh(relayGeom, new THREE.MeshStandardMaterial({ color: 0x1d4ed8 }));
  relayMesh.position.set(-0.65, deckElevation + 0.25, -1.4);
  chassisGroup.add(relayMesh);

  // Brass spray nozzle under rear frame
  const nozzleGeom = new THREE.ConeGeometry(0.08, 0.18, 12);
  const nozzleMat = new THREE.MeshStandardMaterial({
    color: 0xd97706,
    metalness: 0.9,
    roughness: 0.2,
  });
  const sprayNozzleMesh = new THREE.Mesh(nozzleGeom, nozzleMat);
  sprayNozzleMesh.rotation.x = Math.PI; // pointing down
  sprayNozzleMesh.position.set(0, deckElevation - 0.25, -1.75);
  chassisGroup.add(sprayNozzleMesh);

  // Dynamic Spray Particle System (Fountain mist cone)
  const particleCount = 240;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    // initialize at nozzle tip
    positions[i * 3 + 0] = 0;
    positions[i * 3 + 1] = deckElevation - 0.35;
    positions[i * 3 + 2] = -1.75;

    // random cone velocity downwards & outward
    const spread = 0.45;
    velocities[i * 3 + 0] = (Math.random() - 0.5) * spread;
    velocities[i * 3 + 1] = -1.8 - Math.random() * 1.5;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * spread - 0.2;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.08,
    transparent: true,
    opacity: 0.0, // hidden when inactive
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  particleSystem.visible = false;
  chassisGroup.add(particleSystem);

  const sprayParticles: SprayParticleRefs = {
    particleSystem,
    particleGeometry,
    particleMaterial,
    positions,
    velocities,
    count: particleCount,
  };

  // ───────────────────────────────────────────────────────────────────────────
  // 7. Camera Mount & External USB Inspection Camera
  // ───────────────────────────────────────────────────────────────────────────
  const cameraMastGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 12);
  const cameraMast = new THREE.Mesh(cameraMastGeom, aluminumMat);
  cameraMast.position.set(0, deckElevation + 0.7, 1.6);
  chassisGroup.add(cameraMast);

  // Camera swivel bracket
  const bracketGeom = new THREE.BoxGeometry(0.24, 0.08, 0.16);
  const bracket = new THREE.Mesh(bracketGeom, darkMetalMat);
  bracket.position.set(0, deckElevation + 1.15, 1.6);
  chassisGroup.add(bracket);

  // Camera housing
  const camBodyGeom = new THREE.BoxGeometry(0.36, 0.26, 0.24);
  const camBody = new THREE.Mesh(camBodyGeom, darkMetalMat);
  camBody.position.set(0, deckElevation + 1.25, 1.65);
  camBody.rotation.x = 0.25; // Angled down ~15° toward crops
  chassisGroup.add(camBody);

  // Camera lens cylinder
  const lensGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.16, 16);
  const lensMesh = new THREE.Mesh(lensGeom, new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.95 }));
  lensMesh.rotation.x = Math.PI / 2 + 0.25;
  lensMesh.position.set(0, deckElevation + 1.23, 1.78);
  chassisGroup.add(lensMesh);

  // Camera glass optic
  const glassGeom = new THREE.CircleGeometry(0.075, 16);
  const glassMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const glassMesh = new THREE.Mesh(glassGeom, glassMat);
  glassMesh.position.set(0, deckElevation + 1.215, 1.865);
  glassMesh.rotation.x = -0.25;
  chassisGroup.add(glassMesh);

  // ───────────────────────────────────────────────────────────────────────────
  // 8. Ultrasonic Sensors (Left, Center, Right) & Dynamic Visual Range Cones
  // ───────────────────────────────────────────────────────────────────────────
  function createHCSR04(): THREE.Group {
    const usGroup = new THREE.Group();

    // Blue PCB base
    const pcbGeom = new THREE.BoxGeometry(0.45, 0.2, 0.04);
    const pcbMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.5 });
    const pcb = new THREE.Mesh(pcbGeom, pcbMat);
    usGroup.add(pcb);

    // Dual ultrasonic metal transducers (TX & RX cylinders)
    const canGeom = new THREE.CylinderGeometry(0.075, 0.075, 0.12, 16);
    const canMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 });

    const txCan = new THREE.Mesh(canGeom, canMat);
    txCan.rotation.x = Math.PI / 2;
    txCan.position.set(-0.12, 0, 0.07);
    usGroup.add(txCan);

    const rxCan = new THREE.Mesh(canGeom, canMat);
    rxCan.rotation.x = Math.PI / 2;
    rxCan.position.set(0.12, 0, 0.07);
    usGroup.add(rxCan);

    return usGroup;
  }

  // Center Sensor (Facing 0° directly forward)
  const centerUS = createHCSR04();
  centerUS.position.set(0, deckElevation + 0.12, deckLength / 2 + 0.28);
  chassisGroup.add(centerUS);

  // Left Sensor (Angled -28° outward)
  const leftUS = createHCSR04();
  leftUS.position.set(-0.95, deckElevation + 0.12, deckLength / 2 + 0.22);
  leftUS.rotation.y = 0.48; // ~28° left
  chassisGroup.add(leftUS);

  // Right Sensor (Angled +28° outward)
  const rightUS = createHCSR04();
  rightUS.position.set(0.95, deckElevation + 0.12, deckLength / 2 + 0.22);
  rightUS.rotation.y = -0.48; // ~28° right
  chassisGroup.add(rightUS);

  // Ultrasonic Range Indicator Cones (Visual Radar)
  function createRangeCone(): { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial } {
    const coneGeom = new THREE.ConeGeometry(0.65, 2.5, 16, 1, true); // wireframe cone
    coneGeom.translate(0, -1.25, 0); // pivot at apex
    coneGeom.rotateX(-Math.PI / 2); // point forward along +Z

    const mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(coneGeom, mat);
    return { mesh, mat };
  }

  const leftConeData = createRangeCone();
  leftUS.add(leftConeData.mesh);

  const centerConeData = createRangeCone();
  centerUS.add(centerConeData.mesh);

  const rightConeData = createRangeCone();
  rightUS.add(rightConeData.mesh);

  const ultrasonicCones: UltrasonicConeRefs = {
    leftMesh: leftConeData.mesh,
    centerMesh: centerConeData.mesh,
    rightMesh: rightConeData.mesh,
    leftMaterial: leftConeData.mat,
    centerMaterial: centerConeData.mat,
    rightMaterial: rightConeData.mat,
  };

  // ───────────────────────────────────────────────────────────────────────────
  // 9. Environmental & Soil Sensors (Capacitive probe, DHT22, MPU6050)
  // ───────────────────────────────────────────────────────────────────────────
  // Soil Moisture capacitive probe bracket on side
  const probeStemGeom = new THREE.BoxGeometry(0.04, 0.6, 0.12);
  const probeStem = new THREE.Mesh(probeStemGeom, new THREE.MeshStandardMaterial({ color: 0x090d16 }));
  probeStem.position.set(-deckWidth / 2 - 0.15, deckElevation - 0.15, 0.5);
  chassisGroup.add(probeStem);

  // DHT22 white grill sensor on upper frame
  const dhtGeom = new THREE.BoxGeometry(0.14, 0.2, 0.08);
  const dhtMesh = new THREE.Mesh(dhtGeom, new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.8 }));
  dhtMesh.position.set(deckWidth / 2 + 0.08, deckElevation + 0.6, -0.4);
  chassisGroup.add(dhtMesh);

  return {
    rootGroup,
    chassisGroup,
    wheels: {
      frontLeft: wheelFL,
      frontRight: wheelFR,
      rearLeft: wheelRL,
      rearRight: wheelRR,
    },
    ultrasonicCones,
    sprayParticles,
    statusLedMaterial,
    sprayNozzleMesh,
    tankLiquidMesh,
  };
}
