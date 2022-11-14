const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day15/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const a = inputData[0].split(" ").map(Number)[0];
const b = inputData[0].split(" ").map(Number)[1];
const c = inputData[1].split(" ").map(Number)[0];
const d = inputData[1].split(" ").map(Number)[1];

const answer = a + d >= b + c ? b + c : a + d;
console.log(answer);
