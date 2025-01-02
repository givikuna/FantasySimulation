import { Person } from "../classes/Person";
import { dwarfStats } from "../data/stats/dwarfStats";
import { elfStats } from "../data/stats/elfStats";
import { humanStats } from "../data/stats/humanStats";
import { orcStats } from "../data/stats/orcStats";
import { baseStatistics } from "../../types/blueprints";
import { Gender, PersonStatistics, Race, RaceStatistics } from "../../types/types";
import * as fs from "fs";

const lastNames: string[] = fs.readFileSync("../data/names/lastNames.txt").toString().trim().split("\n");
const femaleFirstNames: string[] = fs
    .readFileSync("../data/names/femaleFirstNames.txt")
    .toString()
    .trim()
    .split("\n");
const maleFirstNames: string[] = fs
    .readFileSync("../data/names/maleFirstNames.txt")
    .toString()
    .trim()
    .split("\n");

export function createPerson(stats: {
    id: string;
    name?: string | undefined;
    race: Race;
    gender?: Gender | undefined;
    statistics?: PersonStatistics | undefined;
}): Person {
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
                                  return baseStatistics;
                          }
                      })(m_race),
                  };
                  const keys = Object.keys(stats) as (keyof RaceStatistics)[];
                  for (let i: number = 0; i < keys.length; i++) {
                      stats[keys[i]] += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 8);
                  }
                  return stats;
              })(stats.race);

    return new Person(stats.id, name, stats.race, gender, statistics);
}
