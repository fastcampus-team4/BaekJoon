let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let x = Number(input[0].trim());
let n = Number(input[1].trim());
let sum = 0;
for (let i = 2; i <= n + 1; i++) {
  let items = input[i].trim().split(" ").map(Number);
  sum += items[0] * items[1];
}
console.log(x === sum ? "Yes" : "No");
