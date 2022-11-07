const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day10/input.txt";
const inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputData.length - 1; i++) {
  let info = inputData[i].split(" ");
  if (info[1] > 17 || info[2] >= 80) {
    console.log(`${info[0]} Senior`);
  } else {
    console.log(`${info[0]} Junior`);
  }
}
