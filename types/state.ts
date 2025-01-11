import { PersonData, LocationData } from "./types";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    locations: { [id: string]: LocationData };
};
