import * as express from "express";
import * as url from "url";
import * as fs from "fs";

import { ParsedUrlQuery } from "querystring";
import { SimulationState } from "../types/state";

const port: number = 8081;

const app: express.Application = express();

app.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if (!req.url) {
            res.write("");
        }

        const url_info: Readonly<ParsedUrlQuery> = url.parse(req.url as string, true).query;
    } catch (e: unknown) {
        console.error(e);
        res.write("");
    }
}).listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}/`);
});
