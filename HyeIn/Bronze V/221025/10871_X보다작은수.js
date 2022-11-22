let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

let N = parseInt(input[0].trim().split(" ")[0]);
let X = parseInt(input[0].trim().split(" ")[1]);
let nums = input[1].trim().split(" ").map(Number);
let answer = [];

for (let i = 0; i < N; i++) {
  if (nums[i] < X) {
    answer += nums[i] + " ";
  }
}
console.log(answer);

/* 
공백으로 나누는 법 기억할 것
*/
