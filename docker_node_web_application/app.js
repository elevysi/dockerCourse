//app.js
// Hello, World! NodeJS Application
const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
    res.end("Hello, World!");
});

server.listen(port, () => {
    console.log("Server is running on http://localhost:%s", port);
});