const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day8/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const a = inputData[0].split(" ").map(Number);
const c = inputData[1].split(" ").map(Number);

const bx = c[0] - a[2];
const by = parseInt(c[1] / a[1]);
const bz = c[2] - a[0];

console.log(`${bx} ${by} ${bz}`);
