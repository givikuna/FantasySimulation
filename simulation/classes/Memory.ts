import { Gender, PersonStatistics, PersonData, Race, Location, Rememberable, Perception } from "../../types/types";


export class Memory {
    #subject : Rememberable;
    #associations : Map<Rememberable,number>;
    #perception : Perception;

    constructor(subject : Rememberable, perception : Perception){
        this.#subject = subject;
        this.#associations = new Map<Rememberable,number>();
        this.#perception = perception;
    }

    get subject(): Rememberable { return this.#subject; }
    get associations(): Map<Rememberable,number> { return this.#associations; }
    get perception(): Perception { return this.#perception; }

    set subject(new_subject: Rememberable) {this.#subject = new_subject; }
    set associations(new_associations: Map<Rememberable,number>) {this.#associations = new_associations; }
    set perception(new_perception: Perception) {this.#perception = new_perception; }
}