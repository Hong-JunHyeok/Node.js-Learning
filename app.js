const express = require("express");
let app = express();

app.get("/topic", function (req, res) {
    var topics = ["js는 ...이다", "nodejs는 ...이다", "express는 ...이다"];
    var as = `
        <a href="/topic?id=0">JS 설명</a></br>
        <a href="/topic?id=1">NodeJs 설명</a></br>
        <a href="/topic?id=2">Express 설명</a></br>

        ${topics[req.query.id]}
    `;
    res.send(as);
    //ex ) ?id=2
});

app.listen(3000, function () {
    console.log("Connected 3000 port");
}); //포트 번호를 지정
