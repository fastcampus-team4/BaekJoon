let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

for (let i = 1; i <= input[0]; i++) {
  input[i].length <= 9 && input[i].length >= 6
    ? console.log("yes")
    : console.log("no");
}
