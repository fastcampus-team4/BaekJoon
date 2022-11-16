const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input;
let B1 = "0b" + input[0];
let B2 = "0b" + input[1];

let x = (BigInt(B1) * BigInt(B2, 2)).toString(2);
console.log(x);
