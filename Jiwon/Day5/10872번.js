const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs").readFileSync(filePath).toString();

let result = 1;
for (let i = 1; i <= inputData * 1; i++) {
  result *= i;
}

console.log(result);
