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
const ans = [];
let a = 0;
let b = 0;
for (let i = 1; i < inputData.length; i++) {
  [a, b] = inputData[i].split(" ").map(Number);
  for (let j = 0; j < inputData.length - 1; j++) {
    if (a <= b) {
      ans.push(b);
    }
  }
}

if (ans.length === 0) {
  console.log(-1);
} else {
  console.log(Math.min(...ans));
}
