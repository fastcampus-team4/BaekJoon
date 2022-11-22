let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, w, h, l] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
answer = parseInt(w / l) * parseInt(h / l);
console.log(answer >= n ? n : answer);
