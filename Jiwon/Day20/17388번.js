const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day20/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [s, k, h] = inputData;
if (s + k + h >= 100) {
  console.log("OK");
} else if (s + k + h < 100 && Math.min(...inputData) === s) {
  console.log("Soongsil");
} else if (s + k + h < 100 && Math.min(...inputData) === k) {
  console.log("Korea");
} else if (s + k + h < 100 && Math.min(...inputData) === h) {
  console.log("Hanyang");
}
