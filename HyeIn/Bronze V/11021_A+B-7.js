let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.toString().trim().split(" "));

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let answer = Number(input[i][0]) + Number(input[i][1]);
  console.log(`Case #${i}: ${answer}`);
}
