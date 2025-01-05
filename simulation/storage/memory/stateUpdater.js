"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateState = updateState;
const fs = require("fs");
const path = require("path");
function updateState(newState) {
    try {
        const formerState = String(fs.readFileSync(path.join(__dirname, "currentState.json"), "utf-8"));
        fs.writeFileSync(path.join(__dirname, "lastState.json"), formerState);
        fs.writeFileSync(path.join(__dirname, "currentState.json"), JSON.stringify(newState));
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
}
