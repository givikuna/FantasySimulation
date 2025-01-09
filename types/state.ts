import { ILocation } from "../simulation/classes/locations/ILocation";
import { PersonData } from "./types";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    locations: ReadonlyArray<ILocation>;
};
