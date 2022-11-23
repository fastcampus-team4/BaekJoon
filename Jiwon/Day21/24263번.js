const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day21/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

console.log(n);
console.log(1);
