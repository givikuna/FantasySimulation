import { Person } from "../classes/Person";

import { createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";

import { PersonData } from "../../types/types";
import { SimulationState } from "../../types/state";

export function nextStep(): void {
    const currentState: SimulationState = require("../storage/memory/currentState.json") as SimulationState;
    const people: Person[] = currentState.persons.map((personData: PersonData) => createPerson(personData));
    ageUp(people);

    const newState: SimulationState = {
        persons: people.map((person: Person): PersonData => person.jsonify() satisfies PersonData),
        buildings: currentState.buildings,
    };

    people.forEach((person: Person): void => {
        console.log(`${person.getName()} is ${person.getAge()} years old. (${person.getID})`);
    });

    updateState(newState);
}
