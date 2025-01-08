import { Gender, PersonStatistics, PersonData, Race, Location, Rememberable } from "../../types/types";
import { Memory } from "./Memory";
import { Modifier } from "./Modifier";

export class Person implements Rememberable {
    #id: string;
    #name: string;
    #race: Race;
    #gender: Gender;
    #age: number;
    #location: Location;

    #statistics: PersonStatistics;
    #memories: Map<Rememberable,Memory>;
    #modifiers: Modifier[];

    #logs: string;

    constructor(
        id: string,
        name: string,
        race: Race,
        gender: Gender,
        statistics: PersonStatistics,
        age: number = 0,
        location: Location = [0, 0],
        memories: Map<Rememberable,Memory> = new Map<Rememberable,Memory>(),
        modifiers: Modifier[] = [],
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
    get location(): Location { return this.#location; }
    get memories(): Map<Rememberable,Memory> { return this.#memories; }
    get modifiers(): Modifier[] { return this.#modifiers; }
    get logs(): string { return this.#logs; }

    set name(new_name: string) { this.#name = new_name; }
    set race(new_race: Race) { this.#race = new_race; }
    set statistics(new_statistics: PersonStatistics) { this.#statistics = new_statistics; }
    set age(new_age: number) { this.#age = new_age; }
    set gender(new_gender: Gender) { this.#gender = new_gender; }
    set location(new_location: Location) { this.#location = new_location; }
    set memories(new_memories: Map<Rememberable,Memory>) { this.#memories = new_memories; }
    set modifiers(new_modifiers: Modifier[]) { this.#modifiers = new_modifiers; }
    set logs(new_logs) { this.#logs = new_logs; }

    changeStat(stat: keyof PersonStatistics, newValue: PersonStatistics[typeof stat]) {
        this.#statistics[stat] = newValue;
    }

    ageUp(): void {
        this.age = this.age + 1
    }

    jsonify(): PersonData {
        return {
            id: this.id,
            name: this.name,
            race: this.race,
            gender: this.gender,
            age: this.age,
            statistics: this.statistics,
        };
    }
}
