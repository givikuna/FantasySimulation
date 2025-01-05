import { Building, PersonData } from "./types";

export type SimulationState = {
    persons: ReadonlyArray<PersonData>;
    buildings: ReadonlyArray<Building>;
};
