let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);
let answer = "";
for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}
console.log(answer);
