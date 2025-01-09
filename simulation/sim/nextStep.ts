import * as path from "path";

import { Person } from "../classes/Person";

import { createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";

import { PersonData } from "../../types/types";
import { SimulationState } from "../../types/state";

export function nextStep(): void {
    const currentState: SimulationState = require(path.join(
        __dirname,
        "../storage/memory/currentState.json",
    )) as SimulationState;

    const people: Person[] = Object.keys(currentState.persons).map(
        (key: string): Person => createPerson(currentState.persons[key]),
    );
    
    ageUp(people);

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
