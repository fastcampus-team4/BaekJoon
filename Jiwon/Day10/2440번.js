const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day10/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

let number = Number(inputData);

for (let i = number; i >= 1; i--) {
  console.log("*".repeat(i) + " ".repeat(number - i));
}
