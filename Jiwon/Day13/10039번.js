const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day13/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let sum = 0;
for (let i = 0; i < inputData.length; i++) {
  if (Number(inputData[i]) < 40) {
    inputData[i] = 40;
  }
  sum += Number(inputData[i]);
}

console.log(sum / 5);
