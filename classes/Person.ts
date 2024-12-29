import { Gender, PersonStatistics, Race } from '../types/types';

export class Person {
    #id: string;
    #name: string;
    #race: Race;
    #gender: Gender;
    #age: number;

    #statistics: PersonStatistics;

    constructor(id: string, name: string, race: Race, gender: Gender, statistics: PersonStatistics, age: number = 0) {
        this.#id = id;
        this.#name = name;
        this.#race = race;
        this.#gender = gender;
        this.#statistics = statistics;
        this.#age = age;
    }

    getName(): string {
        return this.#name;
    }

    getRace(): Race {
        return this.#race;
    }

    getStatistics(): PersonStatistics {
        return this.#statistics;
    }

    getAge(): number {
        return this.#age;
    }

    getGender(): Gender {
        return this.#gender;
    }

    getID(): string {
        return this.#id;
    }
}
