// https://www.acmicpc.net/problem/1703
let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
let answer = [];
for (let i = 0; i < input.length - 1; i++) {
  let cnt = input[i][1];
  for (let j = 1; j < input[i].length - 1; j++) {
    if (j % 2 === 1) cnt = cnt - input[i][j + 1];
    else if (j % 2 === 0) cnt = cnt * input[i][j + 1];
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));
