let filePath = process.platform === "linux" ? 0 : "example.txt";
let [ab, cd] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));
let [a, b] = ab.map(Number);
let [c, d] = cd.map(Number);
let answer = a + d >= b + c ? b + c : a + d;
console.log(answer);
