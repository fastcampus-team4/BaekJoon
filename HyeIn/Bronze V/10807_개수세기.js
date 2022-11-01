let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
let count = parseInt(input[0].trim());
let numArr = input[1].trim().split(" ").map(Number);
let find = parseInt(input[2].trim());
let answer = 0;

for (let i = 0; i < count; i++) {
  if (numArr[i] === find) {
    answer++;
  }
}
console.log(answer);

/* 
코드가 너무 긴듯 정리할 것
*/
