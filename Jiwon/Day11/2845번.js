const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day11/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let people =
  inputData[0].split(" ").map(Number)[0] *
  inputData[0].split(" ").map(Number)[1];

let article = inputData[1].split(" ").map(Number);

let answer = article.map((i) => i - people);
console.log(...answer);
