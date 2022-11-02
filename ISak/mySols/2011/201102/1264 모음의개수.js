const filePath = process.platform === "linux" ? 0 : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function countVowels(input) {
  input = input.toUpperCase();
  res = 0;
  for (x of input) {
    switch (x) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        res += 1;
        break;
    }
  }
  return res;
}
let ans = "";
for (let i = 0; i < input.length - 1; i++) {
  ans += `${countVowels(input[i].toUpperCase())}\n`;
}
console.log(ans);
