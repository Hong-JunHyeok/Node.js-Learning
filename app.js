const express = require("express");
let app = express();
app.get("/", function (req, res) {
    res.send("Welcome to / page"); //사용자가 /로 접속을 했을때 Welcome to / page라는 내용을 send함
});

app.get("/login", function (req, res) {
    res.send("Login Please"); //사용자가 /login으로 접속을 했을때 Login Please가 보여짐.
});

app.get("/button", function (req, res) {
    res.send("<button>눌러주세요 헤으응</button>");
});

app.listen(3000, function () {
    console.log("Connected 3000 port");
}); //포트 번호를 지정
