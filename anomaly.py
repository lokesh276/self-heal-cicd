import random

# Simulated AI model
cpu = random.randint(10, 100)

print(f"Detected CPU: {cpu}")

if cpu > 80:
    print("ANOMALY")
    exit(1)   # trigger failure in pipeline
else:
    print("NORMAL")
    exit(0)
