let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let answer = [];
for (let i = 1; i < input.length; i++) {
  ans = `${i}. ${input[i]}`;
  answer.push(ans);
}
console.log(answer.join("\n"));

// 공백 포함하여 출력할 것
