const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs").readFileSync(filePath).toString().split("\n");

const strLength = Number(inputData[0].split(" ")[0]);
const X = Number(inputData[0].split(" ")[1]);
const numbers = inputData[1].split(" ");

result = "";
for (let i = 0; i < strLength; i++) {
  if (Number(numbers[i]) < X) {
    result += numbers[i] + " ";
  }
}

console.log(result);

//콘솔에는 맞게 찍히는데 틀렸대 .. 이유가 뭘까
