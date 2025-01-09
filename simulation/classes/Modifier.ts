import { Rememberable, ModifierStatistics } from "../../types";

export class Modifier implements Rememberable {
    #name: string;
    #statistics: ModifierStatistics;
    #condition: number;

    constructor(
        name:string,
        statistics: ModifierStatistics,
        condition: number
    ){
        this.#name = name;
        this.#statistics = statistics;
        this.#condition = condition;
    }

    get name(): string { return this.#name; }
    get statistics(): ModifierStatistics { return this.#statistics; }
    get condition(): number { return this.#condition; }

    set name(new_name: string) { this.#name = new_name; }
    set statistics(new_statistics: ModifierStatistics) { this.#statistics = new_statistics; }
    set condition(new_condition: number) { this.#condition = new_condition; }
}