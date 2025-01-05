import { Person } from "../simulation/classes/Person";
import { createPerson } from "../simulation/sim/creator";
import { SimulationState } from "../types/state";
import { PersonData, PersonStatistics, Statistic } from "../types/types";
import * as fs from "fs";

function matchingStats(currentStats: PersonStatistics, newStats: PersonStatistics): boolean {
    const stats: Statistic[] = Object.keys(currentStats) as Statistic[];
    for (let i: number = 0; i < stats.length; i++) {
        if (currentStats[stats[i]] !== newStats[stats[i]]) {
            return false;
        }
    }
    return true;
}

export async function watch(id: string, ip: string): Promise<void> {
    try {
        const response: Response = await fetch(`${ip}:8080/?`);
        const newState: SimulationState = JSON.parse(await response.text()) as SimulationState;

        const currentState: SimulationState = JSON.parse(
            String(fs.readFileSync("../database/LatestState.json", "utf16le")),
        );

        let flag: boolean = false;

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

        if (flag) {
            fs.writeFileSync("../database/latestState.json", String(newState));
        }
    } catch (e: unknown) {
        console.error(`Error fetching data from the container:${id}`, e);
    }
}
