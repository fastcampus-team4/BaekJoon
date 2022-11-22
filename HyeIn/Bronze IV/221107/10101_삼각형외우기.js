let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
function solution(s) {
  let total = 0;
  if (s[0] === 60 && s[1] === 60 && s[2] === 60) {
    return "Equilateral";
  } else {
    for (let i = 0; i < s.length; i++) total += input[i];

    if (total === 180 && (s[0] === s[1] || s[1] === s[2] || s[0] === s[2]))
      return "Isosceles";
    else if (total === 180 && s[0] !== s[1] && s[1] !== s[2] && s[0] !== s[2])
      return "Scalene";
    else if (total !== 180) return "Error";
  }
}

console.log(solution(input));
