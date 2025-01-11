import { Primitive } from "type-fest";

import { ILocation, Memory, Person } from "../simulation/classes";

export type PersonData = {
    id: string;
    name: string;
    race: Race;
    gender: Gender;
    statistics: PersonStatistics;
    age: number;
    location: Coordinates;
    memories: {[key: string]: Memory};
    modifiers: string[];
};

export type LocationData = {
    id: string;
    people: string[];
    name: string;
    locationType: string;
    locationCoordinates: Coordinates[];
};

export type ModifierData = {
    id: string;
    name: string;
    condition: number;
};

export interface CurrentSimulationInfo {
    people: {[key: string]: Person},
    locations: {[key: string]: ILocation},
    sim_map: string[][]
}

export type Coordinates = [number, number];
export type Gender = "M" | "F";
export type Race = "Elf" | "Orc" | "Human" | "Dwarf";
export type Statistic =
    | "intelligence"
    | "trusting"
    | "strength"
    | "beauty"
    | "spite"
    | "confidence"
    | "violence"
    | "jealousy"
    | "charisma"
    | "endurance"
    | "pride"
    | "lifeSpan";

export type StatisticsFormat = { Statistic: Primitive };

//

export interface RaceStatistics {
    intelligence: number;
    trusting: number;
    strength: number;
    beauty: number;
    spite: number;
    confidence: number;
    violence: number;
    jealousy: number;
    charisma: number;
    ambition: number;
    endurance: number;
    pride: number;
    lifeSpan: number;
}

export interface ModifierStatistics {
    impressionable: number;
    status: number;
    expensive: number;
}

export interface PersonStatistics extends RaceStatistics {}

export interface Perception extends RaceStatistics, ModifierStatistics {}