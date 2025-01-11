import { Coordinates, LocationData } from "../../../types";

export interface ILocation {
    id: string;
    people: string[];
    locationType: string;
    locationCoordinates: ReadonlyArray<Coordinates>;

    jsonify(): LocationData;
}