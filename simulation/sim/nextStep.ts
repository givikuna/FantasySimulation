import * as path from "path";
import * as fs from "fs"

import { Person } from "../classes/Person";

import { createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";
import { stage1 } from "./decision-making";

import { PersonData, SimulationState } from "../../types";
import { orcStats } from "../data";

export function nextStep(): void {
    const currentState: SimulationState = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../storage/memory/currentState.json"), "utf-8")
    ) as SimulationState;

    const people: Person[] = Object.keys(currentState.persons).map(
        (key: string): Person => createPerson(currentState.persons[key])
    );
    
    ageUp(people);

    people.forEach(person => { stage1(person) });
    
    console.log(orcStats);

    const newState: SimulationState = {
        persons: {},
        locations: currentState.locations,
    };

    for (let i: number = 0; i < people.length; i++) {
        newState.persons[people[i].id] = people[i].jsonify() as PersonData;
    }

    people.forEach((person: Person): void => {
        console.log(`${person.name} is ${person.age} years old. (${person.id})`);
    });

    updateState(newState);
}
