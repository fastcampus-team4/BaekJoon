const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day10/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

let number = Number(inputData);

for (let i = 1; i <= number; i++) {
  console.log(" ".repeat(number - i) + "*".repeat(i));
}
