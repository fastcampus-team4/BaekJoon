let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();
input = parseInt(input);

let answer = 0;
for (let i = 1; i <= input; i++) {
  answer += i;
}
console.log(answer);
