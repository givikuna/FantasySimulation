import * as readlineSync from "readline-sync";
import * as child_process from "child_process";

export function input(query?: any, options?: readlineSync.BasicOptions): string {
    return readlineSync.question(query, options);
}

export function execSync(command: string): string {
    return child_process.execSync(command).toString();
}
