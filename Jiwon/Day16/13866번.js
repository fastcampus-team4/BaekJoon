const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day16/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c, d] = inputData;
console.log(Math.abs(a + d - (b + c)));
