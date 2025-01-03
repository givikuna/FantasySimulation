import { Building, PersonData } from "./types";

export type SimulationState = {
    Persons: ReadonlyArray<PersonData>;
    Buildings: ReadonlyArray<Building>;
};
