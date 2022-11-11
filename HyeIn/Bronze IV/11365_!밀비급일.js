// 고친 코드
let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
let reverse = [];
for (let i = 0; i < input.length - 1; i++) {
  reverse.push(input[i].split("").reverse().join(""));
}
console.log(reverse.join("\n"));

// 틀린 코드
/* let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(""));
let reverse = [];
for (let i = 0; i < input.length - 1; i++) {
  reverse.push(input[i].reverse());
}
let answer = reverse.join("\n").replace(/,/g, "");
console.log(answer);
 */
