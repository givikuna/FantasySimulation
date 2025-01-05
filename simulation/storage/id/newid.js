"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newId = newId;
const fs = require("fs");
const path = require("path");
function newId() {
    let id = Number(String(fs.readFileSync(path.join(__dirname, "id.txt"), "utf-8")).trim()) + 1;
    const _newId = `${new Array(7 - String(id).length).fill("0").join("")}${id}`;
    fs.writeFileSync(path.join(__dirname, "id.txt"), _newId);
    return _newId;
}
