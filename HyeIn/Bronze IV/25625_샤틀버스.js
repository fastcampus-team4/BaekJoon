let filePath = process.platform === "linux" ? 0 : "example.txt";
let [x, y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (x > y) {
  console.log(x + y);
} else {
  console.log(y - x);
}

// ?? 문제 이해 못함
