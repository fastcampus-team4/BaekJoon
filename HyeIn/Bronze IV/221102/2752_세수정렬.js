let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(input.join(" "));

/* 순서대로 출력하는 메서드 sort!!! 기억할 것 */
