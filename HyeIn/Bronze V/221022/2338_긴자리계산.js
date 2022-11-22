let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(BigInt);

let answer = input[0] + input[1] + "\n";
answer += input[0] - input[1] + "\n";
answer += input[0] * input[1];
console.log(answer);
