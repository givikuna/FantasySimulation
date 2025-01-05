import os

if input("Are all the dependencies installed? (y/n) (if unsure say no): ").lower().strip() in ["n", "no"]:
    os.system("npm install typescript -g")
    os.system("npm install -g ts-node")

os.system("sudo chmod +x ./runner.sh")
for f in ["./runner.ts", "./simulationManagement/newId.ts", "./watcher/watcher.ts"]:
    os.system(f"tsc #{f}")
