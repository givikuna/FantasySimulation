import * as fs from "fs";
import * as path from "path";

import { Person } from "./classes/Person";

import { input } from "../lib/System";
import { nextStep } from "./sim/nextStep";
import { createPerson } from "./sim/creator";
import { newId } from "./storage/id/newid";
import { ILocation } from "./classes/locations/ILocation";

import { PersonData, Race } from "../types/types";
import { SimulationState } from "../types/state";

import { races } from "../types/bases";

let placeholder: ILocation = {
    locationType: "lounge",
    locationCoordinates: [[0, 0]],
}

// make one individual of each fantasy race
const people: Person[] = [...races].map((race: Race): Person => createPerson({ id: newId(), race: race, location: placeholder}));

const currentState: SimulationState = {
    persons: {},
    locations: [placeholder],
};

for (let i: number = 0; i < people.length; i++) {
    currentState.persons[people[i].id] = people[i].jsonify() as PersonData;
}

fs.writeFileSync(path.join(__dirname, "storage/memory/currentState.json"), JSON.stringify(currentState));

while (String(input("Next step? ")) !== "n") {
    nextStep();
}
