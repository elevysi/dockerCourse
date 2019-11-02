const express = require("express");
const app = express();

const port = process.env.port || 8081;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port , () => {
    console.log("Express Web Application running on port %s", port);
});