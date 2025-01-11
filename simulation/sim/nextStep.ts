import * as path from "path";
import * as fs from "fs"

import { Person, ILocation } from "../classes";

import { createLocation, createPerson } from "./creator";
import { ageUp } from "./module/helper";
import { updateState } from "../storage/memory/stateUpdater";
import { stage1 } from "./decision-making";

import { LocationData, PersonData, SimulationState, CurrentSimulationInfo } from "../../types";

export function nextStep(): void {
    const currentState: SimulationState = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../storage/memory/currentState.json"), "utf-8")
    ) as SimulationState;

    const people: {[key: string]: Person} = {}
    Object.keys(currentState.persons).forEach(id => { people[id] = createPerson(currentState.persons[id]) });

    const locations: {[key: string]: ILocation} = {}
    Object.keys(currentState.locations).forEach(id => { locations[id] = createLocation(currentState.locations[id]) });

    //this does nothing right now but useful later on
    const map: string[][] = new Array(15).fill("").map(() => new Array(15).fill(""));
    Object.keys(locations).forEach(id => {
        locations[id].locationCoordinates.forEach(coords => {
            if(map[coords[0]][coords[1]] != ""){
                console.log("two locations just overlapped, you fked up somewhere")
            }
            map[coords[0]][coords[1]] = id
        });
    });

    let step_info: CurrentSimulationInfo = {
        people: people,
        locations: locations,
        sim_map: map
    }
    
    ageUp(people);

    Object.keys(people).forEach(person => { stage1(people[person], step_info) });
    
    const newState: SimulationState = {
        persons: {},
        locations: {},
    };

    Object.keys(people).forEach(id => {
        console.log(`${people[id].name} is ${people[id].age} years old. (${id})`);
        newState.persons[id] = people[id].jsonify() as PersonData;
    });


    Object.keys(locations).forEach(id => {
        newState.locations[id] = locations[id].jsonify() as LocationData;
    });

    updateState(newState);
}
