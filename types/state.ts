import { Building, PersonData } from "./types";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    buildings: ReadonlyArray<Building>;
};
