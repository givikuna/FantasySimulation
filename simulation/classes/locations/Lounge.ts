import { ILocation } from "../";
import { Coordinates, LocationData } from "../../../types";

export class Lounge implements ILocation {
    #id: string;
    #people: string[];
    #name: string;
    #locationCoordinates: Coordinates[];

    get id(): string { return this.#id; }
    get people(): string[] { return this.#people; }
    get name(): string { return this.#name; }
    get locationType(): string { return "Lounge"; }
    get locationCoordinates(): Coordinates[] { return this.#locationCoordinates; }

    constructor(id: string, people: string[], name: string, locationCoordinates: Coordinates[]){
        this.#id = id;
        this.#people = people;
        this.#name = name;
        this.#locationCoordinates = locationCoordinates;
    }

    jsonify(): LocationData {
        return {
            id: this.#id,
            people: this.#people,
            name: this.#name,
            locationType: "Lounge",
            locationCoordinates: this.#locationCoordinates,
        }
    };
}