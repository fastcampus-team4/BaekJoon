const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const caseA = parseInt(inputData * 0.78);
const caseB = parseInt(inputData - inputData * 0.2 * 0.22);
console.log(`${caseA} ${caseB}`);
