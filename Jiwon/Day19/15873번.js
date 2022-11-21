const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day19/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

let A;
let B;
if (inputData.length === 2) {
  A = Number(inputData[0]);
  B = Number(inputData[1]);
} else if (inputData.length === 3) {
  if (inputData[1] == 0) {
    A = 10;
    B = Number(inputData[2]);
  } else {
    A = Number(inputData[0]);
    B = 10;
  }
} else {
  A = 10;
  B = 10;
}

console.log(A + B);
