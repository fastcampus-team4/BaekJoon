const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day8/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const N = Number(inputData);
console.log(N - 1946);
