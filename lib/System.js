"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
exports.exec = exec;
var readlineSync = require("readline-sync");
var child_process = require("child_process");
function input(query, options) {
    return readlineSync.question(query, options);
}
function exec(command) {
    return child_process.execSync(command).toString();
}
