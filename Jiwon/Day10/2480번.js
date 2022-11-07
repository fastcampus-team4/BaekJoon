const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day10/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .sort(function (a, b) {
    return b - a;
  });

let A = Number(inputData[0]);
let B = Number(inputData[1]);
let C = Number(inputData[2]);

if (A !== B && A !== C && B !== C) {
  console.log(A * 100);
} else if (A === B && B !== C) {
  console.log(1000 + A * 100);
} else if (B === C && C !== A) {
  console.log(1000 + C * 100);
} else if (C === A && A !== B) {
  console.log(1000 + C * 100);
} else {
  console.log(10000 + A * 1000);
}
