let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
let answer = (BigInt("0b" + input[0]) * BigInt("0b" + input[1])).toString(2);
console.log(answer);
