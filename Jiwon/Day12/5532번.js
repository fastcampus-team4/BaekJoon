const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day12/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const L = inputData[0];
const A = inputData[1];
const B = inputData[2];
const C = inputData[3];
const D = inputData[4];
let day = [];

day.push(Math.ceil(A / C));
day.push(Math.ceil(B / D));
day.sort();
console.log(L - day[1]);
