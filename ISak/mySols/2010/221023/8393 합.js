// https://www.acmicpc.net/8393/
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();

let N = Number(input);

console.log((N * (N + 1)) / 2);
