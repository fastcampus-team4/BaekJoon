// https://www.acmicpc.net/problem/1284

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let cnt;
let answer = [];
for (nums of input) {
  if (nums === "0") break;
  cnt = 1;
  num = nums.trim().split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") cnt += 2;
    else if (num[i] === "0") cnt += 4;
    else cnt += 3;
    cnt++;
  }
  answer.push(cnt);
}
console.log(answer.join("\n"));
