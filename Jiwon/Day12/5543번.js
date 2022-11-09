const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day12/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const h = inputData.slice(0, 3).sort(function (comp1, comp2) {
  return comp1 - comp2;
});
const b = inputData.slice(3, 5).sort(function (comp1, comp2) {
  return comp1 - comp2;
});

console.log(Number(h[0]) + Number(b[0]) - 50);
