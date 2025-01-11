import { ModifierStatistics } from "../../types";

export class Modifier {
    #id: string;
    #name: string;
    #condition: number;

    constructor(
        id: string,
        name: string,
        condition: number
    ){
        this.#id = id;
        this.#name = name;
        this.#condition = condition;
    }

    get id(): string { return this.#id; }
    get name(): string { return this.#name; }
    get condition(): number { return this.#condition; }

    set name(new_name: string) { this.#name = new_name; }
    set condition(new_condition: number) { this.#condition = new_condition; }
}