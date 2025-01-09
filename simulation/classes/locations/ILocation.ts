import { Person } from "../Person"

import { Coordinates } from "../../../types";

export interface ILocation {
    people: Person[];
    locationType: string;
    locationCoordinates: ReadonlyArray<Coordinates>;
}