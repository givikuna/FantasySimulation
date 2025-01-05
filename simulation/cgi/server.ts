import * as express from "express";
import * as fs from "fs";
import * as path from "path";

import { SimulationState } from "../../types/state";

const app: express.Application = express();

app.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if (!req.url) {
            res.write("");
        }

        const currentState: SimulationState = JSON.parse(
            String(fs.readFileSync(path.join(__dirname, "../storage/memory/currentState.json"), "utf-8")),
        );

        console.log(JSON.stringify(currentState));

        res.write(JSON.stringify(currentState));
        res.end();
    } catch (e: unknown) {
        console.error(e);
        res.write("");
        res.end();
    }
}).listen(8080, (): void => {
    console.log(`Server is running on http://localhost:${8080}`);
});
