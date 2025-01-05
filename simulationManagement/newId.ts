import * as fs from "fs";

function increment(id: string): string {
    const match: RegExpExecArray = id.match(/^([A-Z]+)(\d+)([A-Z]+)$/) as RegExpExecArray;

    const letters1: string = match[1];
    let n: number = parseInt(match[2], 10);
    const letters2: string = match[3];

    n++;

    if (n > 999) {
        n = 0;
        const incrementedLetters = incrementLetters(letters1);
        return incrementedLetters + `000` + letters2;
    }

    return letters1 + n.toString().padStart(3, "0") + letters2;
}

function incrementLetters(letters: string): string {
    let result = letters.split("");
    let carry = 1;

    for (let i = result.length - 1; i >= 0; i--) {
        let charCode = result[i].charCodeAt(0);

        if (charCode === 90) {
            result[i] = "A";
        } else {
            result[i] = String.fromCharCode(charCode + carry);
            carry = 0;
            break;
        }
    }

    return result.join("");
}

export function newSimulationId(): string {
    const currentID: string = String(fs.readFileSync("./simid.txt", "utf16le")).trim();
    const newID: string = increment(currentID);
    fs.writeFileSync("./simid.txt", newID);
    return newID;
}
