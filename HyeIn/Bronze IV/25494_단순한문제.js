let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let arr = [];
let answer = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
for (let j = 0; j < arr.length; j++) {
  answer.push(Math.min(...arr[j]));
}

console.log(answer.join("\n"));

/* 
서로 나누었을 때 나머지가 같게 하려면 세 수가 모두 같아야 함.
min 을 2개 사용하여 제일 작은 수를 찾으면 됨.
*/
