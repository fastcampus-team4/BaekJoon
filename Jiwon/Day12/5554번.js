const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day12/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const time =
  Number(inputData[0]) +
  Number(inputData[1]) +
  Number(inputData[2]) +
  Number(inputData[3]);
console.log(`${Math.floor(time / 60)} ${time % 60}`);
