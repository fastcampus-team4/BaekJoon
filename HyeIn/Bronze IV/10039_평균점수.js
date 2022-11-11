let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let total = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] < 40) {
    total += 40;
  } else {
    total += input[i];
  }
}
console.log(total / 5);
