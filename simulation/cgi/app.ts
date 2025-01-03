import * as express from "express";
import * as url from "url";
import * as fs from "fs";

import { ParsedUrlQuery } from "querystring";
import { SimulationState } from "../../types/state";

const port: number = 8081;

const app: express.Application = express();

app.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if (!req.url) {
            res.write("");
        }

        const url_info: Readonly<ParsedUrlQuery> = url.parse(req.url as string, true).query;

        if ("changes" in url_info && url_info["changes"] == "1") {
            // ! The FUNNNNNN WAY (╰ ‿ ╯)

            /*
            res.send(
                JSON.stringify(
                    Object.fromEntries(
                        ["current", "last"]
                            .map(
                                (name: string): SimulationState =>
                                    JSON.parse(
                                        String(
                                            fs.readFileSync(`../storage/memory/${name}State.json`, "utf16le"),
                                        ),
                                    ) satisfies SimulationState,
                            )
                            .map(
                                (
                                    state: SimulationState,
                                    i: number,
                                ): ["current" | "last", SimulationState] => [
                                    i === 0 ? "current" : "last",
                                    state,
                                ],
                            ),
                    ),
                ),
            );
            */

            // ! The ¡boring! "way" ⸨◺_◿⸩ (T_T)

            const currentState: SimulationState = JSON.parse(
                String(fs.readFileSync(`../storage/memory/currentState.json`, "utf16le")),
            );
            const lastState: SimulationState = JSON.parse(
                String(fs.readFileSync(`../storage/memory/lastState.json`, "utf16le")),
            );
            const output: { [Key: string]: SimulationState } = {
                currentState: currentState,
                lastTate: lastState,
            };
            res.write(JSON.stringify(output));
        }
    } catch (e: unknown) {
        console.error(e);
        res.write("");
    }
}).listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}/`);
});
