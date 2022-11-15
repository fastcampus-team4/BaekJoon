const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
function calc(a, b, c) {
  let res = 0;
  if (a === b && b === c) {
    res = 10000 + a * 1000;
  } else if (a === b || b === c) {
    res = 1000 + b * 100;
  } else if (a === c) {
    res = 1000 + a * 100;
  } else {
    res = 100 * Math.max(a, b, c);
  }
  return res;
}
let max = 0;

for (i = 1; i < input.length; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  let cal = calc(a, b, c);
  if (cal > max) {
    max = cal;
  }
}
console.log(max);
