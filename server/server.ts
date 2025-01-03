import * as express from "express";
import * as url from "url";

import { ParsedUrlQuery } from "querystring";

const port: number = 8081;

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response): void => {
    try {
        if (!req.url) {
            res.write("");
        }

        const url_info: Readonly<ParsedUrlQuery> = url.parse(req.url as string, true).query;

        console.log(url_info);
    } catch (e: unknown) {
        console.error(e);
        res.write("");
    }
}).listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}/`);
});
