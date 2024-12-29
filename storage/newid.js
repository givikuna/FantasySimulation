"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var id = Number(String(fs.readFileSync('./id.txt')).trim()) + 1;
fs.writeFileSync('./id.txt', "".concat((new Array(7 - String(id).length)).fill('0').join('')).concat(id));
