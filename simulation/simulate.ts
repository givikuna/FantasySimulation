import * as fs from "fs";

import { Person } from "./classes/Person";

import { input } from "../lib/System";
import { nextStep } from "./sim/nextStep";
import { createPerson } from "./sim/creator";
import { newId } from "./storage/id/newid";

import { PersonData, Race } from "../types/types";
import { SimulationState } from "../types/state";

import { races } from "../types/bases";

// make one individual of each fantasy race
const people: Person[] = [...races].map((race: Race): Person => createPerson({ id: newId(), race: race }));

const currentState: SimulationState = {
    persons: people.map((person: Person): PersonData => person.jsonify()),
    buildings: [
        {
            buildingType: "lounge",
            buildingLocation: [[0, 0]],
        },
    ],
};

fs.writeFileSync("./storage/memory/currentState.json", JSON.stringify(currentState));

while (String(input("Next step? ")) !== "n") {
    nextStep();
}
