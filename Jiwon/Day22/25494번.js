const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day22/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let a = 1;
let b = 1;
let c = 1;
let min = 1;

for (let i = 1; i < inputData.length; i++) {
  [a, b, c] = inputData[i].split(" ").map(Number);
  min = Math.min(a, b, c);
  console.log(min);
}
