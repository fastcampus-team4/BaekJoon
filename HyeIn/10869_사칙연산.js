let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);

/* 
Math.floor 소수점 잘라주는 메서드 꼭 사용할 것
*/
