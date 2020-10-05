const express = require("express");
let app = express();

app.use(express.static("public"));
//public을 정적인 파일이 있는곳이라고 하겠다
//정적인 파일은 다시 서버를 재부팅 하지 않아도 바로 반영된다.

app.get("/dynamic", function (req, res) {
    let lis = "";
    for (var i = 0; i < 5; i++) {
        lis =
            lis +
            `
        <li>
            coding ${i}
        </li>`;
    }
    res.send(lis);
});
//동적인 파일의 경우에는 재부팅을 해야 반영이 된다.(자동화 시키는 툴이 있긴하다)
app.get("/", function (req, res) {
    res.send("Welcome to / page"); //사용자가 /로 접속을 했을때 Welcome to / page라는 내용을 send함
});

app.get("/login", function (req, res) {
    res.send("Login Please"); //사용자가 /login으로 접속을 했을때 Login Please가 보여짐.
});

app.listen(3000, function () {
    console.log("Connected 3000 port");
}); //포트 번호를 지정
