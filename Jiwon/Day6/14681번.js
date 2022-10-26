const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const x = parseInt(inputData[0]);
const y = parseInt(inputData[1]);

if (x > 0 && y > 0) {
  console.log("1");
} else if (x < 0 && y > 0) {
  console.log("2");
} else if (x < 0 && y < 0) {
  console.log("3");
} else if (x > 0 && y < 0) {
  console.log("4");
}
