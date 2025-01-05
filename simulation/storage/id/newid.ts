import * as fs from "fs";
import * as path from "path";

export function newId(): string {
    let id: number = Number(String(fs.readFileSync(path.join(__dirname, "id.txt"), "utf-8")).trim()) + 1;
    const _newId: string = `${new Array(7 - String(id).length).fill("0").join("")}${id}`;
    fs.writeFileSync(path.join(__dirname, "id.txt"), _newId);
    return _newId;
}
