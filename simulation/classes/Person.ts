import { Gender, PersonStatistics, PersonData, Race, Location } from "../../types/types";

export class Person {
    #id: string;
    #name: string;
    #race: Race;
    #gender: Gender;
    #age: number;
    #location: Location;

    #statistics: PersonStatistics;

    constructor(
        id: ReturnType<typeof this.getName>,
        name: ReturnType<typeof this.getName>,
        race: ReturnType<typeof this.getRace>,
        gender: ReturnType<typeof this.getGender>,
        statistics: ReturnType<typeof this.getStatistics>,
        age: ReturnType<typeof this.getAge> = 0,
        location: ReturnType<typeof this.getLocation> = [0, 0],
    ) {
        this.#id = id;
        this.#name = name;
        this.#race = race;
        this.#gender = gender;
        this.#statistics = statistics;
        this.#age = age;
        this.#location = location;
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

    getLocation(): Location {
        return this.#location;
    }

    setName(newName: ReturnType<typeof this.getName>): void {
        this.#name = newName;
    }

    setRace(newRace: ReturnType<typeof this.getRace>): void {
        this.#race = newRace;
    }

    changeStat(stat: keyof PersonStatistics, newValue: PersonStatistics[typeof stat]) {
        this.#statistics[stat] = newValue;
    }

    setStatistics(newStatistics: PersonStatistics) {
        this.#statistics = newStatistics;
    }

    setAge(newAge: ReturnType<typeof this.getAge>): void {
        this.#age = newAge;
    }

    setGender(newGender: ReturnType<typeof this.getGender>): void {
        this.#gender = newGender;
    }

    setLocation(newLocation: ReturnType<typeof this.getLocation>): void {
        this.#location = newLocation;
    }

    ageUp(): void {
        this.setAge(this.getAge() + 1);
    }

    jsonify(): PersonData {
        return {
            id: this.getID(),
            name: this.getName(),
            race: this.getRace(),
            gender: this.getGender(),
            age: this.getAge(),
            statistics: this.getStatistics(),
        };
    }
}
