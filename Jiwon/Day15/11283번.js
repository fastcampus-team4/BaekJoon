const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day15/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const answer = Number(inputData.charCodeAt()) - 44031;
console.log(answer);
