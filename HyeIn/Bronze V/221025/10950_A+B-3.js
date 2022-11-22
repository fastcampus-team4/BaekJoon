let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
let T = parseInt(input[0].trim());
let answer = [];

for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].trim().split(" ").map(Number);
  answer.push(a + b);
}
console.log(answer.join("\n"));
