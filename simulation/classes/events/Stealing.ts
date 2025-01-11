import { Person, IEvent } from "../";

import { PersonStatistics } from "../../../types";

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

    noticed(guy: Person): void {
        let stats: PersonStatistics = guy.statistics;
        let stealing_index: number = 
            Math.random() * Math.pow(stats.jealousy, 3) +
            Math.random() * Math.pow(stats.pride, 3)
        
        
        
            ;
        
        this.#discreteness = stealing_index; //for now cus dumb tsc doesnt like me not using thing
    }

    finished(): void {
        
    }
}