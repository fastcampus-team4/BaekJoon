let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));
let answer = [];
function solution(s) {
  for (let i = 0; i < s.length - 1; i++) {
    answer.push(Number(s[i][0]) + Number(s[i][1]));
  }
  return answer.join("\n");
}
console.log(solution(input));
