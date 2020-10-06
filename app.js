var express = require("express"); //express 를 사용하기 위함
var bodyParser = require("body-parser"); //POST방식의 데이터를 얻기 위함
var fs = require("fs"); //파일 관리를 하기 위함
var app = express(); //express매서드를 사용해서 app객체를 얻음
var os = require("os"); //os라이브러리를 가져옴 (운영체제의 정보를 얻기 위해)

app.locals.pretty = true; //jade를 이쁘게 보이게 하기 위함

app.set("views", "views");
app.set("view engine", "jade"); //jade를 view engine으로 사용

// 라우팅
app.get("/", function (req, res) {
    res.send("local server에 오신것을 환영합니다");
}); // "/" 경로에 대한 라우트 설정

app.get("/topic", function (req, res) {
    res.render("form");
});

app.use(bodyParser.urlencoded({ extended: false })); //bodyParser 설정
app.get("/form_receiver", function (req, res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send("title : " + title + " description : " + description);
});

app.listen(3000, function () {
    var osInfo = os.platform();
    console.log("Connected 3000 port at " + osInfo);
});
