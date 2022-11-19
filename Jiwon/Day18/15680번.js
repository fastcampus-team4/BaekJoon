const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day18/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

const N = Number(inputData);
if (N === 0) {
  console.log("YONSEI");
} else if (N === 1) {
  console.log("Leading the Way to the Future");
}
