const fs = require("fs");

//Sync
let data = fs.readFileSync("data.txt", { encoding: "utf-8" });
console.log(data);

//Async
let data2 = fs.readFile("data.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data);
});
