let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.toString().trim().split(" "));

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let a = Number(input[i][0]);
  let b = Number(input[i][1]);
  let answer = a + b;
  console.log(`Case #${i}: ${a} + ${b} = ${answer}`);
}
