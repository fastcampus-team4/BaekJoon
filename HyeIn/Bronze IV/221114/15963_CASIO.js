let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
if (n === m) {
  console.log(1);
} else {
  console.log(0);
}
