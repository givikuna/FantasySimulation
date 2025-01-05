import os

if input("Are all the dependencies installed? (y/n) (if unsure say no): ").lower().strip() in ["n", "no"]:
    for f in ["ts-node", "typescript", "livescript"]:
        os.system(f"npm install #{f} -g")

os.system("sudo chmod +x ./run.sh")
os.system("sudo chmod +x ./stop.sh")
for f in ["./runner.ts", "./simulationManagement/newId.ts", "./watcher/watcher.ts"]:
    os.system(f"tsc #{f}")
