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
for (let i = 0; i < inputData.length - 1; i++) {
  let F = Number(inputData[i].split(" ")[0]);
  let M = Number(inputData[i].split(" ")[1]);
  sum = F + M;
  console.log(sum);
}
