const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day23/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let a;
let b;
let c;
let answer;
let max = 0;
for (let i = 1; i < input.length; i++) {
  [a, d, g] = input[i].split(" ").map(Number);
  if (a === d + g) {
    answer = a * (d + g) * 2;
  } else {
    answer = a * (d + g);
  }
  max = Math.max(answer, max);
}

console.log(max);
