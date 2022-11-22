let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, nums] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(""));

nums = nums.map((el) => Number(el));
let answer = nums.reduce((a, b) => a + b);

console.log(answer);
