const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const N = parseInt(inputData / 4);
const result = "long ".repeat(N) + "int";
console.log(result);
