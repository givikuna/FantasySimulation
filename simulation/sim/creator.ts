import * as fs from "fs";
import * as path from "path";

import { Person, Memory, Modifier, ILocation } from "../classes";

import { Gender, PersonData, PersonStatistics, Race, RaceStatistics, Rememberable, basePersonStatistics } from "../../types";
import { dwarfStats, elfStats, humanStats, orcStats } from "../data";

const lastNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/lastNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");
const femaleFirstNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/femaleFirstNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");
const maleFirstNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/maleFirstNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");

export function createPerson(
    stats:
        | PersonData
        | {
              id: string;
              name?: string | undefined;
              race: Race;
              gender?: Gender | undefined;
              statistics?: PersonStatistics | undefined;
              age?: number | undefined;
              location: ILocation;
              memories?: Map<Rememberable,Memory> | undefined;
              modifiers?: Modifier[] | undefined;
          },
): Person {
    const age: number = stats?.age != undefined ? stats.age : 0;
    const memories: Map<Rememberable,Memory> = stats?.memories != undefined ? stats.memories : new Map<Rememberable,Memory>();
    const modifiers: Modifier[] = stats?.modifiers != undefined ? stats.modifiers : [];

    const gender: Gender =
        stats?.gender != undefined
            ? stats.gender
            : (["M", "F"] satisfies Array<Gender>)[Math.floor(Math.random() * 2)];

    const name: string =
        stats?.name != undefined
            ? stats.name
            : ((m_gender: Gender): string => {
                  const firstName: string =
                      m_gender === "F"
                          ? femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)]
                          : maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
                  const lastName: string = lastNames[Math.floor(Math.random() * lastNames.length)];
                  return `${firstName} ${lastName}`;
              })(gender);

    const statistics: PersonStatistics =
        stats?.statistics != undefined
            ? stats.statistics
            : ((m_race: Race): PersonStatistics => {
                  const stats = {
                      ...((r: Race): RaceStatistics => {
                          switch (r) {
                              case "Dwarf":
                                  return dwarfStats;
                              case "Human":
                                  return humanStats;
                              case "Elf":
                                  return elfStats;
                              case "Orc":
                                  return orcStats;
                              default:
                                  return basePersonStatistics;
                          }
                      })(m_race),
                  };
                  const keys = Object.keys(stats) as (keyof RaceStatistics)[];
                  for (let i: number = 0; i < keys.length; i++) {
                      stats[keys[i]] += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 8);
                  }
                  return stats;
              })(stats.race);

    return new Person(stats.id, name, stats.race, gender, statistics, age, stats.location, memories, modifiers);
}
