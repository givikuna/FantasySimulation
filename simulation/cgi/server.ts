import * as express from "express";
import * as fs from "fs";

import { SimulationState } from "../../types/state";

const app: express.Application = express();

app.get("/SEND", async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if (!req.url) {
            res.write("");
        }

        const currentState: SimulationState = JSON.parse(
            String(fs.readFileSync("../storage/memory/currentState.json", "utf16le")),
        );
    } catch (e: unknown) {
        console.error(e);
        res.write("");
    }
}).listen(8080, (): void => {
    console.log(`Server is running on http://localhost:${8080}/`);
});
