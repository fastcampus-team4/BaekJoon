const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let max = 0;
let maxI = 0;
for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    maxI = i + 1;
  }
}
console.log(`${max}\n${maxI}`);
