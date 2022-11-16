const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const inputData = input
// inputData
// const a = inputData[0].split(" ").map(Number)[0];
// const b = inputData[0].split(" ").map(Number)[1];
// const c = inputData[1].split(" ").map(Number)[0];
// const d = inputData[1].split(" ").map(Number)[1];
const a = Number(inputData[0][0]);
const b = Number(inputData[0][2]);
const c = Number(inputData[1][0]);
const d = Number(inputData[1][2]);
console.log(inputData[0][2])
console.log(inputData[1])
const answer = a + d >= b + c ? b + c : a + d;
console.log(answer);