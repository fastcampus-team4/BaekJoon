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

const sum = inputData.reduce((a, c) => a + c, 0);
const a = inputData[0];
const b = inputData[1];
const c = inputData[2];

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (sum === 180) {
  if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
