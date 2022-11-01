const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day9/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const X = parseInt(inputData[0]);
const N = parseInt(inputData[1]);
let sum = 0;

for (i = 2; i < N + 2; i++) {
  let items = inputData[i].split(" ");
  let item = items[0];
  let price = items[1];
  sum += item * price;
}

if (sum === X) {
  console.log("Yes");
} else {
  console.log("No");
}
