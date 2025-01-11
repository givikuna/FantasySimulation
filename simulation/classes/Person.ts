import { Memory } from ".";

import { Gender, PersonStatistics, PersonData, Race, Coordinates } from "../../types";

export class Person {
    #id: string;
    #name: string;
    #race: Race;
    #gender: Gender;
    #age: number;
    #location: Coordinates;

    #statistics: PersonStatistics;
    #memories: {[key: string]: Memory};
    #modifiers: string[];

    #logs: string;

    constructor(
        id: string,
        name: string,
        race: Race,
        gender: Gender,
        statistics: PersonStatistics,
        age: number = 0,
        location: Coordinates,
        memories: {[key: string]: Memory} = {},
        modifiers: string[] = [],
    ) {
        this.#id = id;
        this.#name = name;
        this.#race = race;
        this.#gender = gender;
        this.#statistics = statistics;
        this.#age = age;
        this.#location = location;
        this.#memories = memories;
        this.#modifiers = modifiers;
        this.#logs = "";
    }

    get name(): string { return this.#name; }
    get race(): Race { return this.#race; }
    get statistics(): PersonStatistics { return this.#statistics; }
    get age(): number {return this.#age; }
    get gender(): Gender { return this.#gender; }
    get id(): string { return this.#id; }
    get location(): Coordinates { return this.#location; }
    get memories(): {[key: string]: Memory} { return this.#memories; }
    get modifiers(): string[] { return this.#modifiers; }
    get logs(): string { return this.#logs; }

    set name(new_name: string) { this.#name = new_name; }
    set race(new_race: Race) { this.#race = new_race; }
    set statistics(new_statistics: PersonStatistics) { this.#statistics = new_statistics; }
    set age(new_age: number) { this.#age = new_age; }
    set gender(new_gender: Gender) { this.#gender = new_gender; }
    set location(new_location: Coordinates) { this.#location = new_location; }
    set memories(new_memories: {[key: string]: Memory}) { this.#memories = new_memories; }
    set modifiers(new_modifiers: string[]) { this.#modifiers = new_modifiers; }
    set logs(new_logs) { this.#logs = new_logs; }

    changeStat(stat: keyof PersonStatistics, newValue: PersonStatistics[typeof stat]) {
        this.#statistics[stat] = newValue;
    }

    ageUp(): void {
        this.age += 1
    }

    jsonify(): PersonData {
        return {
            id: this.id,
            name: this.name,
            race: this.race,
            gender: this.gender,
            statistics: this.statistics,
            age: this.age,
            memories: this.memories,
            modifiers: this.modifiers,
            location: this.location,
        };
    }
}
