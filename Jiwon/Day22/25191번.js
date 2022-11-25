const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day22/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(inputData[0]);
const [a, b] = inputData[1].split(" ").map(Number);

console.log(Math.min(Math.floor(a / 2) + b, n));
