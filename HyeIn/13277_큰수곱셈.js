let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((e) => BigInt(e));
let answer = input[0] * input[1];
console.log(answer.toString());

/* 
코드가 기니까 줄여볼 것
*/
