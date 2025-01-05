import os

if input("Are all the dependencies installed? (y/n) (if unsure say no): ").lower().strip() in ["n", "no"]:
    for f in ["ts-node", "typescript", "livescript", "pm2"]:
        print(f"Installing: {f}")
        os.system(f"npm install {f} -g")

for f in ["./dockerAwait.sh", "./run.sh", "./processSplitter.sh", "./dockerPerms.sh"]:
    os.system(f"sudo chmod +x {f}")
    print(f"Gave permissions to {f}")

"""
for f in ["./runner.ts", "./simulationManagement/newId.ts", "./watcher/watcher.ts"]:
    print(f"Compiling {f}")
    os.system(f"tsc {f}")
    print("Finished Compilation\n")
"""
