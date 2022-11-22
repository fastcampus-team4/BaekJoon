let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);
let answer = [];
for (let i = 1; i <= input; i++) {
  txt = `Hello World, Judge ${i}!`;
  answer.push(txt);
}

console.log(answer.join("\n"));
