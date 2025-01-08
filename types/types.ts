import { Primitive } from "type-fest";

export type PersonData = {
    id: string;
    name: string;
    race: Race;
    gender: Gender;
    age: number;
    statistics: PersonStatistics;
};

export type Location = [number, number];
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
    | "prideful"
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

export interface Building {
    buildingType: string;
    buildingLocation: ReadonlyArray<Location>;
}

export interface PersonStatistics extends RaceStatistics {}

export interface Rememberable {}
export interface Perception extends RaceStatistics, ModifierStatistics {}