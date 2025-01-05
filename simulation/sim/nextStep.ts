import { Person } from "../classes/Person";

import { createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";

import { PersonData } from "../../types/types";
import { SimulationState } from "../../types/state";

export function nextStep(): void {
    const currentState: SimulationState = require("../storage/memory/currentState.json") as SimulationState;
    const ids: string[] = Object.keys(currentState.persons);
    const people: Person[] = [];
    for (let i: number = 0; i < ids.length; i++) {
        people.push(createPerson(currentState.persons[ids[i]]));
    }
    ageUp(people);

    const newState: SimulationState = {
        persons: {},
        buildings: currentState.buildings,
    };

    for (let i: number = 0; i < ids.length; i++) {
        newState.persons[ids[i]] = people[i].jsonify() as PersonData;
    }

    people.forEach((person: Person): void => {
        console.log(`${person.getName()} is ${person.getAge()} years old. (${person.getID})`);
    });

    updateState(newState);
}
