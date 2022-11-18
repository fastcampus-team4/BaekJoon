const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day17/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

console.log((Math.sqrt(3) * inputData * inputData) / 4);
