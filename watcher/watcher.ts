import * as fs from "fs";
import * as path from "path";

import { PersonStatistics, Statistic } from "../types/types";
import { SimulationState } from "../types/state";

function matchingStats(currentStats: PersonStatistics, newStats: PersonStatistics): boolean {
    const stats: Statistic[] = Object.keys(currentStats) as Statistic[];
    for (let i: number = 0; i < stats.length; i++) {
        if (currentStats[stats[i]] !== newStats[stats[i]]) {
            return false;
        }
    }
    return true;
}

export async function watch(id: string): Promise<boolean> {
    try {
        const response: Response = await fetch(`http://localhost:8080/?`);
        const newState: SimulationState = JSON.parse(String(await response.text())) as SimulationState;

        const currentStateString: string = String(
            fs.readFileSync(path.join(__dirname, "../database/latestState.json"), "utf-8"),
        ).trim();

        let flag: boolean = false;

        if (currentStateString == "" || currentStateString.length < 20) {
            flag = true;
        } else {
            const currentState: SimulationState = JSON.parse(currentStateString) as SimulationState;
            const peopleIDs: string[] = Object.keys(newState.persons);

            for (let i: number = 0; i < peopleIDs.length; i++) {
                const currentID: string = peopleIDs[i];
                if (
                    currentState.persons[currentID].age !== newState.persons[currentID].age ||
                    currentState.persons[currentID].gender !== newState.persons[currentID].gender ||
                    currentState.persons[currentID].name !== newState.persons[currentID].name ||
                    !matchingStats(
                        currentState.persons[currentID].statistics,
                        newState.persons[currentID].statistics,
                    )
                ) {
                    flag = true;
                }
            }
        }

        if (flag) {
            fs.writeFileSync(path.join(__dirname, "../database/latestState.json"), JSON.stringify(newState));
        }

        return true;
    } catch (e: unknown) {
        console.error(`Error fetching data from the container ${id}:`, e);
        return false;
    }
}
