const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day17/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const balance = inputData[0].split(" ").map(Number);
const chicken = inputData[1];
const sum = balance[0] + balance[1];

let answer = 0;
if (sum < 2 * chicken) {
  answer = sum;
} else answer = sum - 2 * chicken;

console.log(answer);
