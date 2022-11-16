const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day14/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const M = inputData[0];
const D = inputData[1];

if (M === 2 && D === 18) {
  console.log("Special");
} else if (M === 2) {
  if (D > 18) {
    console.log("After");
  } else {
    console.log("Before");
  }
} else if (M > 2) {
  console.log("After");
} else {
  console.log("Before");
}
