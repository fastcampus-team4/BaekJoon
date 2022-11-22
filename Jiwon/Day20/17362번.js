const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day20/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();
answer = inputData % 8;
if (answer === 1) {
  console.log(1);
} else if (answer === 2 || answer === 0) {
  console.log(2);
} else if (answer === 3 || answer === 7) {
  console.log(3);
} else if (answer === 4 || answer === 6) {
  console.log(4);
} else {
  console.log(5);
}
