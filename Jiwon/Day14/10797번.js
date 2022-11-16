const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day14/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const d = parseInt(inputData[0]);
const cars = inputData[1].split(" ").map(Number);
let cnt = 0;
for (let i = 0; i < cars.length; i++) {
  if (d === cars[i]) {
    cnt += 1;
  }
}

console.log(cnt);
