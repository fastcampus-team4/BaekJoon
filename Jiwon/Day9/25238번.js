const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const a = parseInt(inputData[0]);
const b = parseInt(inputData[1]);
if (a - (a * b) / 100 >= 100) {
  console.log(0);
} else {
  console.log(1);
}
