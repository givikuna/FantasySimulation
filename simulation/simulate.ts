import * as fs from "fs";
import * as path from "path";

import { Person, ILocation } from "./classes";

import { input } from "../lib/System";
import { nextStep } from "./sim/nextStep";
import { createPerson, createLocation } from "./sim/creator";
import { newId } from "./storage/id/newid";

import { PersonData, Race, SimulationState, races } from "../types";

//this is here just so we can actually spawn people in, we gonna make an actual map later
let placeholder_lounge: ILocation = createLocation(
    {
        name: "noob place",
        id: newId(),
        locationCoordinates: [[0,0]],
        locationType: "Lounge"
    }
)

// make one individual of each fantasy race
const people: Person[] = [...races].map((race: Race): Person => createPerson({ id: newId(), race: race, location: [0, 0]}));

//this will be done automatically
for (let i: number = 0; i < people.length; i++) {
    placeholder_lounge.people.push(people[i].id)
}

const currentState: SimulationState = {
    persons: {},
    locations: {},
};

currentState.locations[placeholder_lounge.id] = placeholder_lounge.jsonify();

for (let i: number = 0; i < people.length; i++) {
    currentState.persons[people[i].id] = people[i].jsonify() as PersonData;
}
fs.writeFileSync(path.join(__dirname, "storage/memory/currentState.json"), JSON.stringify(currentState));

while (String(input("Next step? ")) !== "n") {
    nextStep();
}
