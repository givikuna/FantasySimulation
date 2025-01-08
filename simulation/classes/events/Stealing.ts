import { Person } from "../Person";
import { IEvent } from "./IEvent";

export class Stealing implements IEvent {
    #discreteness: number;
    #visibility: number;
    #participants: Person[];

    get discreteness(): number { return this.#discreteness; }
    get visibility(): number { return this.#visibility; }
    get participants(): Person[] { return this.#participants; }

    constructor(participants: Person[]){
        this.#participants = participants;
        this.#discreteness = 85;
        this.#visibility = 0;
    }

    Noticed(guy: Person): void {
        let stealing_index: number = 10;
        

    }

    Finished(): void {
        
    }
}