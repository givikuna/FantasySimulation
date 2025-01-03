import * as fs from "fs";

let id: number = Number(String(fs.readFileSync("./id.txt")).trim()) + 1;
fs.writeFileSync("./id.txt", `${new Array(7 - String(id).length).fill("0").join("")}${id}`);
