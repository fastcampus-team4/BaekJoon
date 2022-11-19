const { text } = require("stream/consumers");

const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day18/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, C] = inputData;
const answer = Math.max((A * B) / C, (A / B) * C);
console.log(Math.floor(answer));
