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

const b1 = BigInt(`0b${inputData[0]}`);
const b2 = BigInt(`0b${inputData[1]}`);

const answer = (b1 * b2).toString(2);
console.log(answer);
