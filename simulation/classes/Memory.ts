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

    getSubject(): Rememberable { return this.#subject; }
    getAssociations(): Map<Rememberable,number> { return this.#associations; }
    getPerception(): Perception { return this.#perception; }

    setSubject(subject: Rememberable): void { this.#subject = subject; }
    setAssociations(associations: Map<Rememberable,number>): void { this.#associations = associations; }
    setPerception(perception: Perception): void { this.#perception = perception; }
}