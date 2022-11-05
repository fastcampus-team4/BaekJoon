const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

min = input[0].split(" ").map(Number);
man = input[1].split(" ").map(Number);

function sum(x) {
  return x.reduce((a, c) => a + c, 0);
}

console.log(Math.max(sum(min), sum(man)));
