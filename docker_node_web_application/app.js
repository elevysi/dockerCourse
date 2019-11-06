const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const apiRouter = require("./server/routes/apiRoute");
require("./server/config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());


//#use for middleware; api middleware
app.use("/api", apiRouter);
const port = process.env.port || 8080;

app.get("/", (req, res, next) => {
    res
        .send("Hello, World!");
});

app.listen(port , () => {
    console.log("Express Web Application running on port %s", port);
});