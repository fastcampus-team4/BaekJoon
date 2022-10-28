let filePath = process.platform === "linux" ? 0 : "example.txt";
let [A, B] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(BigInt);
let answer = A + B;
console.log(answer.toString());

/* 
BigInt 때문에 붙는 n 은 toString() 으로 없애줘야 함
*/
