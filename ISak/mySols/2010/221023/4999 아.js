// https://www.acmicpc.net/problem/4999
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

if (input[0].length >= input[1].length) {
  console.log("go");
} else {
  console.log("no");
}
