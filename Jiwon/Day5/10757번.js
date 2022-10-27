const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

//BingInt는 임의의 정밀도로 정수를 나타낼 수있는 JavaScript의 새로운 숫자 데이터형
//parseInt나 Number로는 큰수를 정밀하게 불러오지 못 함
const A = BigInt(inputData[0]);
const B = BigInt(inputData[1]);
//BigInt를 사용할 경우 n이 출력되기 때문에 toString()을 사용해 n제거
const result = (A + B).toString();
console.log(result);
