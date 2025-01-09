import { Person } from "../../classes";

export function ageUp(people: Person[]): void {
    for (let i: number = 0; i < people.length; i++) {
        people[i].ageUp();
    }
}
