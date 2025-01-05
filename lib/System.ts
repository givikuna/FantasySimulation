import * as readlineSync from "readline-sync";

export function input(query?: any, options?: readlineSync.BasicOptions): string {
    return readlineSync.question(query, options);
}
