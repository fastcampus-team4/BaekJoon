const { text } = require("stream/consumers");

const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day18/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < inputData.length; i++) {
  const testCase = inputData[i].split(" ").map(Number);
  let A = testCase[0];
  let B = testCase[1];
  console.log(A + B);
}
