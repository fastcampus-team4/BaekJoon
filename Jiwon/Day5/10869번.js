const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs").readFileSync(filePath).toString().split(" ");

const num1 = Number(inputData[0]);
const num2 = Number(inputData[1]);
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(parseInt(num1 / num2));
console.log(num1 % num2);
