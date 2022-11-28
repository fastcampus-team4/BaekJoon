const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day23/input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let cnt = 0;
for (let i = 2; i < input.length; i++) {
  if (input[i] === input[0]) {
    cnt += 1;
  }
}

console.log(cnt);
