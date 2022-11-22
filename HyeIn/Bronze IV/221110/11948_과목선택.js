let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let abcdMin = Math.min(input[0], input[1], input[2], input[3]);
let efMin = Math.min(input[4], input[5]);
input.splice(input.indexOf(abcdMin), 1);
input.splice(input.indexOf(efMin), 1);
let answer = 0;
for (let i = 0; i < input.length; i++) {
  answer += input[i];
}

console.log(answer);
