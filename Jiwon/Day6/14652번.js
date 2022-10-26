const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  parseInt(inputData[2] / inputData[1]),
  parseInt(inputData[2] % inputData[1])
);
