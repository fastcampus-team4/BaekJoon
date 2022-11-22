let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n1, n2] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [a, b] = [100 - n1, 100 - n2];
let c = 100 - (a + b);
let d = a * b;
let q = parseInt(d / 100);
let r = d % 100;

console.log(a, b, c, d, q, r);
console.log(c + q, r);

/* 굳이 이렇게 해주지 않아도 됐음 */
// let answer = [];
// if (d >= 100) {
//   q = parseInt(d / 100);
//   r = d % 100;
//   answer.push(c + q, r);
// }
