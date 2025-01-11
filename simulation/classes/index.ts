export { Memory } from "./Memory"
export { Modifier } from "./Modifier"
export { Person } from "./Person"
export { IEvent } from "./events/IEvent"
export { ILocation } from "./locations/ILocation"

export { Lounge } from "./locations/Lounge"
export { Stealing } from "./events/Stealing"

import { Lounge } from "./locations/Lounge"
import { Stealing } from "./events/Stealing"

export const eventsMap = new Map([
    ["Stealing", Stealing]
]);

export const locationsMap = new Map([
    ["Lounge", Lounge],
]);