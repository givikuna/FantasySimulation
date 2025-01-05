import * as fs from "fs";

export function newId(): string {
    let id: number = Number(String(fs.readFileSync("./id.txt")).trim()) + 1;
    const _newId: string = `${new Array(7 - String(id).length).fill("0").join("")}${id}`;
    fs.writeFileSync("./id.txt", _newId);
    return _newId;
}
