const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day7/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

console.log(Math.ceil(inputData / 5));
