const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let [C, D] = input[1].split(" ").map(Number);

console.log(Math.min(A + D, B + C));
