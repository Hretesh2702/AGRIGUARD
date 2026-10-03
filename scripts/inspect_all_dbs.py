import sqlite3
import glob

def check_all():
    db_files = glob.glob('data/*.db') + glob.glob('*.db')
    print("Found databases:", db_files)
    for db in db_files:
        print(f"\n==========================================")
        print(f"DATABASE: {db}")
        print(f"==========================================")
        conn = sqlite3.connect(db)
        cur = conn.cursor()
        cur.execute("SELECT name FROM sqlite_master WHERE type='table'")
        tables = [r[0] for r in cur.fetchall()]
        for t in tables:
            if t == 'sqlite_sequence': continue
            cur.execute(f"PRAGMA table_info({t})")
            cols = [c[1] for c in cur.fetchall()]
            cur.execute(f"SELECT count(*) FROM {t}")
            cnt = cur.fetchone()[0]
            print(f"\n  Table '{t}' has {cnt} rows. Columns: {cols}")
            
            # Check for camera/image keywords
            cam_cols = [c for c in cols if any(k in c.lower() for k in ['camera', 'image', 'frame', 'snapshot', 'video', 'feed', 'photo', 'stream', 'base64'])]
            if cam_cols:
                print(f"    --> Found camera/image related columns: {cam_cols}")
                for col in cam_cols:
                    cur.execute(f"SELECT count({col}) FROM {t} WHERE {col} IS NOT NULL")
                    non_null_cnt = cur.fetchone()[0]
                    print(f"        Column '{col}' non-null count: {non_null_cnt}")
                    if non_null_cnt > 0:
                        cur.execute(f"SELECT {col} FROM {t} WHERE {col} IS NOT NULL LIMIT 3")
                        print(f"        Sample values: {cur.fetchall()}")

if __name__ == '__main__':
    check_all()
