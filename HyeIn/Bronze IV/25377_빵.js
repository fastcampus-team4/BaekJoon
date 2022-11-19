let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let arr = [];
let answer = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
for (let j = 0; j < arr.length; j++) {
  if (arr[j][0] <= arr[j][1]) {
    answer.push(arr[j][1]);
  }
}
console.log(answer.length === 0 ? -1 : Math.min(...answer));
