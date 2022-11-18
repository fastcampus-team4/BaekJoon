const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day17/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [a, b, c, d, e] = inputData;

let answer = 0;
if (a < 0) {
  answer = Math.abs(a) * c + d + b * e;
} else {
  answer = (b - a) * e;
}

console.log(answer);
