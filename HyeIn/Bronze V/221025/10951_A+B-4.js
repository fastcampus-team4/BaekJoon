let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.toString().trim().split(" "));
for (let i = 0; i < input.length; i++) {
  let answer = Number(input[i][0]) + Number(input[i][1]);
  console.log(answer);
}
