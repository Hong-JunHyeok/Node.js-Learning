const express = require("express");
let app = express();

app.get("/topic", function (req, res) {
    res.send("당신의 id요청값은 : " + req.query.id); //쿼리스트링에 전달된 값을 출력함
    //ex ) ?id=2
});

app.listen(3000, function () {
    console.log("Connected 3000 port");
}); //포트 번호를 지정
