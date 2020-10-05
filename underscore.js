const _ = require("underscore");
var arr = [3, 6, 9, 1, 12];

console.log("첫번째 원소 :", _.first(arr));
console.log("마지막 원소 :", _.last(arr));

console.log(
    arr.sort((v1, v2) => {
        console.log("c", v1, v2);
        return v2 - v1;
    })
);
