import { Person } from "../../classes";

export function ageUp(people: {[key: string]: Person}): void {
    Object.keys(people).forEach(id => {
        people[id].ageUp();
    });
}
