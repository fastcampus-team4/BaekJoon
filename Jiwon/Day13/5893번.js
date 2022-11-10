const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/Day13/input.txt";
const inputData = require("fs").readFileSync(filePath).toString().trim();

let bin = "0b" + inputData;
const answer = (BigInt(bin) * 17n).toString(2);
console.log(answer);
