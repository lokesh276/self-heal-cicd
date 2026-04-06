import random
import time

while True:
    cpu_usage = random.randint(10, 100)
    print(f"CPU Usage: {cpu_usage}")

    # Simulate failure condition
    if cpu_usage > 85:
        print("⚠️ High CPU Detected!")
    
    time.sleep(2)
