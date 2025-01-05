"use strict";
Object.defineProperty( exports, "__esModule", { value: true } );
exports.input = input;
exports.execSync = execSync;
var readlineSync = require( "readline-sync" );
var child_process = require( "child_process" );
function input ( query, options ) {
    return readlineSync.question( query, options );
}
function execSync ( command ) {
    return child_process.execSync( command ).toString();
}
