let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += input[i] * input[i];
}
let answer = sum % 10;
console.log(answer);

/* 
input 의 length 만큼 각각 제곱해주고 그것을 sum 에 넣어서 반복해서 더한 뒤 sum 에서 10 을 나눈 나머지를 출력
*/
