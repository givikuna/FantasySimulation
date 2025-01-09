import * as fs from "fs";
import * as path from "path";

import { SimulationState } from "../../../types";

export function updateState(newState: SimulationState): boolean {
    try {
        const formerState: string = String(
            fs.readFileSync(path.join(__dirname, "currentState.json"), "utf-8"),
        );

        fs.writeFileSync(path.join(__dirname, "lastState.json"), formerState);
        fs.writeFileSync(path.join(__dirname, "currentState.json"), JSON.stringify(newState));

        return true;
    } catch (e: unknown) {
        console.log(e);
        return false;
    }
}
