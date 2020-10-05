const http = require("http");

const hostname = "127.0.0.1";
const port = 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("success!\n");
}).listen(port, hostname, function () {
    console.log(`server running at (http://${hostname}:${port}/)`);
});
