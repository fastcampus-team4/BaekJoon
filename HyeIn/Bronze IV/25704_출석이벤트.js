let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, p] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let answer = [];
if (n < 5) return console.log(p);
if (n >= 5) answer.push(p - 500);
if (n >= 10) answer.push(p - p * (10 / 100));
if (n >= 15) answer.push(p - 2000);
if (n >= 20) answer.push(p - p * (25 / 100));
console.log(Math.min(...answer) <= 0 ? 0 : Math.min(...answer));

/* n < 5 꼭.. 추가해주자.. */
