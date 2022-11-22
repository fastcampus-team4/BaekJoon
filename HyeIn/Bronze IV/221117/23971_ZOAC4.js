let filePath = process.platform === "linux" ? 0 : "example.txt";
let [h, w, n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = Math.ceil(h / (n + 1)) * Math.ceil(w / (m + 1));
console.log(answer);
