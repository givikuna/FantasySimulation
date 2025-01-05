import * as process from "process";
import * as fs from "fs";
import * as path from "path";

import { watch } from "./watcher/watcher";
import { newSimulationId } from "./simulationManagement/newId";
import { exec } from "./lib/System";

import { SimulationData } from "./types/simulationData";

const containerID: string = exec(`docker ps -q --filter="STATUS=running"`);
const containerIP: string = exec(`docker exec ${containerID} sh -c "hostname --ip-address"`);

const simData: SimulationData = {
    containerID: containerID,
    processID: process.pid,
    simulationID: newSimulationId(),
};

fs.writeFileSync(
    path.join(__dirname, "database/simulationRunningLogs.json"),
    JSON.stringify([
        ...(JSON.parse(
            fs.readFileSync(path.join(__dirname, "database/simulationRunningLogs.json"), "utf-8").toString(),
        ) as SimulationData[]),
        simData,
    ]),
);

setInterval(async () => {
    await watch(containerID, containerIP);
}, 1000);
