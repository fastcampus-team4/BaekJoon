let filePath = process.platform === "linux" ? 0 : "example.txt";
let [m, d] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
function solution(m, d) {
  if (m < 2 || (m === 2 && d < 18)) {
    return "Before";
  } else if (m > 2 || (m === 2 && d > 18)) {
    return "After";
  } else if (m === 2 && d === 18) {
    return "Special";
  }
}

console.log(solution(m, d));
