import * as readlineSync from "readline-sync";
import * as child_process from "child_process";

/**
 * Prompts the user for input from the command line.
 *
 * @param {any} [query] - The question or prompt to display to the user.
 * @param {readlineSync.BasicOptions} [options] - Optional configuration options for the prompt.
 * @returns {string} - The user's input as a string.
 */
export function input(query?: any, options?: readlineSync.BasicOptions): string {
    return readlineSync.question(query, options);
}

/**
 * Executes a command synchronously in the shell and returns the output.
 *
 * @param {string} command - The shell command to execute.
 * @returns {string} - The output from the command as a string.
 */
export function execSync(command: string): string {
    return child_process.execSync(command).toString();
}

/**
 * Pauses the execution of the program for a specified amount of time.
 *
 * @param {number} amount - The amount of time to pause, in milliseconds.
 */
export function sleep(amount: number): void {
    const start: number = new Date().getTime();
    while (new Date().getTime() - start < amount) null;
}
