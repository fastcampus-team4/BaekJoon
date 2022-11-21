const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day19/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, m, k] = inputData;
const O = m;
const X = n - m;
const backO = k;
const backX = n - k;
console.log(Math.min(O, backO) + Math.min(X, backX));
