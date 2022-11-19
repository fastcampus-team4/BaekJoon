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
  .map(BigInt);

const [N, M] = inputData;
const answer = BigInt((N * M) / 2n);
console.log(answer.toString());
