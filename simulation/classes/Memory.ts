import { Perception } from "../../types";

export class Memory {
    #subject_id : string;
    #associations : { [key: string]: number };
    #perception : Perception;

    constructor(subject : string, associations: { [key: string]: number }, perception : Perception){
        this.#subject_id = subject;
        this.#associations = associations;
        this.#perception = perception;
    }

    get subject_id(): string { return this.#subject_id; }
    get associations(): { [key: string]: number } { return this.#associations; }
    get perception(): Perception { return this.#perception; }

    set subject_id(new_subject_id: string) {this.#subject_id = new_subject_id; }
    set associations(new_associations: { [key: string]: number }) {this.#associations = new_associations; }
    set perception(new_perception: Perception) {this.#perception = new_perception; }
}