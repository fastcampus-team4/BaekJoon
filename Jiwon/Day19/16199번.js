const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day19/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const birth = inputData[0].split(" ").map(Number);
const current = inputData[1].split(" ").map(Number);

let a = 0;
if (
  (current[0] - birth[0] !== 0 && current[1] < birth[1]) ||
  (current[1] === birth[1] && current[2] < birth[2])
) {
  a = current[0] - birth[0] - 1;
} else {
  a = current[0] - birth[0];
}
const b = 1 + current[0] - birth[0];
const c = current[0] - birth[0];

console.log(a);
console.log(b);
console.log(c);
