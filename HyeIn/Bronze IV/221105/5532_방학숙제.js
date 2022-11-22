let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));

function solution(input) {
  str = Math.ceil(input[1] / input[3]);
  math = Math.ceil(input[2] / input[4]);
  return str > math ? input[0] - str : input[0] - math;
}

console.log(solution(input));
