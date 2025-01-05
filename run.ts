import * as Docker from "dockerode";
import * as fs from "fs";

import { watch } from "./watcher/watcher";
import { newSimulationId } from "./simulationManagement/newId";
import { SimulationData } from "./types/simulationData";

const docker: Docker = new Docker();

const containerData: { id: string; ip: string } = { id: "", ip: "" };

const simID: string = newSimulationId();

docker
    .createContainer({ Image: "fantasy-sim", name: `Simulation${newSimulationId()}` })
    .then(async (container: Docker.Container): Promise<Docker.Container> => {
        return await container.start();
    })
    .then(async (container: Docker.Container): Promise<void> => {
        console.log("Container started");
        containerData.id = container.id;
        containerData.ip = (await container.inspect()).NetworkSettings.IPAddress;

        fs.writeFileSync(
            "./database/simulationRunningLogs.json",
            JSON.stringify([
                ...(JSON.parse(
                    fs.readFileSync("./database/simulationRunningLogs.json", "utf16le").toString(),
                ) as SimulationData[]),
                {
                    simulationID: simID,
                    containerID: containerData.id,
                    processID: process.pid,
                },
            ] satisfies SimulationData[]),
        );

        docker.getContainer("").kill();

        setInterval(async () => {
            await watch(containerData.id, containerData.ip);
        }, 1000);
    })
    .catch((e: unknown): void => {
        console.log(`Error with container ${containerData.id}`, e);
    });
