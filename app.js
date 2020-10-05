const express = require("express");
var bodyParser = require("body-parser");

let app = express();
app.set("view engine", "jade");
app.set("views", "views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/form", function (req, res) {
    res.render("temp");
});

// app.get("/form_receiver", function (req, res) {
//     var title = req.query.title;
//     var discription = req.query.discription;
//     res.send(title + "," + discription);
// });

app.post("/form_receiver", function (req, res) {
    var title = req.body.title;
    var discription = req.body.discription;
    res.send(title + "," + discription);
});

app.get("/topic/:id", function (req, res) {
    var topics = ["js는 ...이다", "nodejs는 ...이다", "express는 ...이다"];
    var as = `
        <a href="/topic/0">JS 설명</a></br>
        <a href="/topic/1">NodeJs 설명</a></br>
        <a href="/topic/2">Express 설명</a></br>

        ${topics[req.params.id]}
    `;

    res.send(as);
    //ex ) ?id=2
});

app.get("/topic/:id/:mode", function (req, res) {
    res.send(req.params.id + "," + req.params.mode);
});

app.get("/temp", function (req, res) {
    res.send();
});

app.listen(3000, function () {
    console.log("Connected 3000 port");
}); //포트 번호를 지정
