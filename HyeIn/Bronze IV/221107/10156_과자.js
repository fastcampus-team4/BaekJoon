let filePath = process.platform === "linux" ? 0 : "example.txt";
let [k, n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = k * n - m;
if (Math.sign(answer) === -1) {
  console.log(0);
} else {
  console.log(answer);
}
