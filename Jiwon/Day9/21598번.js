const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const result = "SciComLove\n".repeat(inputData);
console.log(result);
