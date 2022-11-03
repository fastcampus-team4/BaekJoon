let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [l, p] = input[0].trim().split(" ").map(Number);
let news = input[1].trim().split(" ").map(Number);
let answer = "";
for (let i = 0; i < news.length; i++) {
  let m = l * p;
  answer += news[i] - m + " ";
}
console.log(answer);
