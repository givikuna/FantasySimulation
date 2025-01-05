import { Person } from "../classes/Person";

import { createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";

import { PersonData } from "../../types/types";
import { SimulationState } from "../../types/state";

export function nextStep(): void {
    const currentState: SimulationState = require("../storage/memory/currentState.json") as SimulationState;
    const people: Person[] = Object.keys(currentState.persons).map(
        (key: string): Person => createPerson(currentState.persons[key]),
    );
    ageUp(people);

    const newState: SimulationState = {
        persons: {},
        buildings: currentState.buildings,
    };

    for (let i: number = 0; i < people.length; i++) {
        newState.persons[people[i].getID()] = people[i].jsonify() as PersonData;
    }

    people.forEach((person: Person): void => {
        console.log(`${person.getName()} is ${person.getAge()} years old. (${person.getID})`);
    });

    updateState(newState);
}
