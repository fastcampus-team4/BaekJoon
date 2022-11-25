const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day22/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const N = Number(inputData);

console.log(2 ** N);
