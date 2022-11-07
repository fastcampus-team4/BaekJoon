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
  let small = inputData[i].toLowerCase();
  let cnt = 0;
  for (let j = 0; j < inputData[i].length; j++) {
    if (
      small[j] === "a" ||
      small[j] === "e" ||
      small[j] === "i" ||
      small[j] === "o" ||
      small[j] === "u"
    ) {
      cnt += 1;
    }
  }
  console.log(cnt);
}
