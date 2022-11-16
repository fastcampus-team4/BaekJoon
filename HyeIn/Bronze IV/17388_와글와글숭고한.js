let filePath = process.platform === "linux" ? 0 : "example.txt";
let [s, k, h] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = "OK";
if (s + k + h >= 100) {
  answer;
} else {
  answer = Math.min(s, k, h);
  if (answer === s) {
    answer = "Soongsil";
  } else if (answer === k) {
    answer = "Korea";
  } else {
    answer = "Hanyang";
  }
}
console.log(answer);
