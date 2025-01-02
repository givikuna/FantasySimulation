import { Building, PersonData } from "./types/types";

export type State = {
    Persons: ReadonlyArray<PersonData>;
    Buildings: ReadonlyArray<Building>;
}
