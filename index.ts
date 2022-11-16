import Express from "express";
import { router } from "./src/views/router";

export const app = Express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(Express.json());
app.use(router);

app.listen(process.env.SERVER_PORT, () => console.log("Server is running on port " + process.env.SERVER_PORT));

