import { ILocation } from "../simulation/classes";
import { PersonData } from "./types";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    locations: ReadonlyArray<ILocation>;
};
