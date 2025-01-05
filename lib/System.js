"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
exports.exec = exec;
const readlineSync = require("readline-sync");
const child_process = require("child_process");
function input(query, options) {
    return readlineSync.question(query, options);
}
function exec(command) {
    return child_process.execSync(command).toString();
}
