const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day23/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = 100 - input[0];
const b = 100 - input[1];
const c = 100 - (a + b);
const d = a * b;
const q = parseInt(d / 100);
const r = parseInt(d % 100);

console.log(a, b, c, d, q, r);
console.log(c + q, r);
