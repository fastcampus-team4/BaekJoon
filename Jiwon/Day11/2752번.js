const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day11/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

let answer = inputData.sort(function (a, b) {
  return a - b;
});

console.log(`${answer[0]} ${answer[1]} ${answer[2]}`);
