import * as Docker from "dockerode";

import { watch } from "./watcher/watcher";
import { newSimulationId } from "./simulationManagement/newId";

const docker: Docker = new Docker();

const containerData: { id: string; ip: string } = { id: "", ip: "" };

docker
    .createContainer({ Image: "fantasy-sim", name: `Simulation${newSimulationId()}` })
    .then(async (container: Docker.Container): Promise<Docker.Container> => {
        return await container.start();
    })
    .then(async (container: Docker.Container): Promise<void> => {
        console.log("Container started");
        containerData.id = container.id;
        containerData.ip = (await container.inspect()).NetworkSettings.IPAddress;

        setInterval(async () => {
            await watch(containerData.id, containerData.ip);
        }, 1000);
    })
    .catch((e: unknown): void => {
        console.log(`Error with container ${containerData.id}`, e);
    });
