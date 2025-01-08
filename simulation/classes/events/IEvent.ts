import { Person } from "../Person";

export interface IEvent {
    discreteness: number;
    visibility: number;
    participants: Person[];

    Noticed(guy: Person): void;
    Finished(): void;
}