export type Race = "Elf" | "Orc" | "Human" | "Dwarf";
export interface RaceStatistics {
    "intelligence": number;
    "trusting": number;
    "strength": number;
    "beauty": number;
    "spiteful": number;
    "confidence": number;
    "violence": number;
    "jealousy": number;
    "charisma": number;
    "ambition": number;
    "endurance": number;
    "lifeSpan": number;
};
// export interface PersonStatistics extends Omit<RaceStatistics, "lifeSpan"> {};
export interface PersonStatistics extends RaceStatistics {};
export interface Modifiers extends RaceStatistics {};
export type Gender = "M" | "F";
