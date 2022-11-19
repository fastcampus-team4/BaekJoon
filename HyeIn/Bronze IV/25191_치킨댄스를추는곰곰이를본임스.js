let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0].trim());
let [a, b] = input[1].split(" ").map(Number);

let answer = parseInt(a / 2) + parseInt(b / 1);
if (answer > n) {
  console.log(n);
} else {
  console.log(answer);
}
