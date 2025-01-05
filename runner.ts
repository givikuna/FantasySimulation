import * as Docker from "dockerode";

import { newSimulationId } from "./simulationManagement/newId";
// import { watch } from "./watcher/watcher";

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
    })
    .catch((e: unknown): void => {
        console.log("Error", e);
    });
