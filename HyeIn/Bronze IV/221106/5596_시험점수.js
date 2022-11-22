let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));

function solution(s) {
  let answer = [];
  for (x of s) {
    let score = 0;
    for (let i = 0; i < x.length; i++) {
      score += Number(x[i]);
    }
    answer.push(score);
  }
  // return Math.min.apply(null, answer);
  return Math.max(...answer);
}

console.log(solution(input));
