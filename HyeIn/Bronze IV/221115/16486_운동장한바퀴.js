let filePath = process.platform === "linux" ? 0 : "example.txt";
let [d1, d2] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(d1 * 2 + 2 * 3.141592 * d2);
/* 총 둘레 = (c의 가로 x 2) + (2 * 3.141592 * a의 반지름)  */
