const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day14/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

inputData.forEach((i) => counts[alphabet.indexOf(i)]++);
console.log(counts.join(" "));
