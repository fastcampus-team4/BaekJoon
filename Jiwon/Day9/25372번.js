const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = inputData[0];

for (i = 1; i <= N; i++) {
  let password = inputData[i].toString();
  if (password.length >= 6 && password.length <= 9) {
    if (!password.isNaN) {
      console.log("yes");
    }
  } else {
    console.log("no");
  }
}
