const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day16/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C, D, E, F] = inputData;

const science = inputData.slice(0, 4).sort((a, b) => b - a);
const history = inputData.slice(4, 6).sort((a, b) => b - a);

const sSum = science[0] + science[1] + science[2];
const hSum = history[0];

console.log(sSum + hSum);
