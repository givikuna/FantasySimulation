import { Coordinates } from "../../../types/types";

export interface ILocation {
    locationType: string;
    locationCoordinates: ReadonlyArray<Coordinates>;
}