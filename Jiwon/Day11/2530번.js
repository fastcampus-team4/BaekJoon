const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day11/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [A, B, C] = inputData[0].split(" ").map(Number);
let D = Number(inputData[1]);

C += D;

while (C >= 60) {
  C -= 60;
  B += 1;
}

while (B >= 60) {
  B -= 60;
  A += 1;
}

A %= 24;

console.log(`${A} ${B} ${C}`);
