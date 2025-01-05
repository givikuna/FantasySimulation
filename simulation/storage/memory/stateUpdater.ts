import * as fs from "fs";

import { SimulationState } from "../../../types/state";

export function updateState(newState: SimulationState): boolean {
    try {
        const formerState: string = String(fs.readFileSync("./currentState.json", "utf16le"));

        fs.writeFileSync("./lastState.json", formerState);
        fs.writeFileSync("./currentState.json", JSON.stringify(newState));

        return true;
    } catch (e: unknown) {
        console.log(e);
        return false;
    }
}
