const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day8/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
console.log(`${B - A} ${B}`);
