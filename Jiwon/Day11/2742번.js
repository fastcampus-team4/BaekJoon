const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day11/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

let number = parseInt(inputData);
let answer = "";
for (let i = 0; i <= number - 1; i++) {
  answer += `${number - i}\n`;
}

console.log(answer);
