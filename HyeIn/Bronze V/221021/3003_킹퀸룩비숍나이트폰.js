let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);
let set = [1, 1, 2, 2, 2, 8];
for (let i = 0; i < input.length; i++) {
  set[i] -= input[i];
}
console.log(set.join(" "));

/* 
위 답은 정답이지만 코드가 너무 길다
아래 답이 더 효율적

let fs = require("fs");
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(" ")
  .map((num) => parseInt(num));
let origin = [1, 1, 2, 2, 2, 8];
let result = origin.map((el, idx) => el - input[idx]);
console.log(result.join(" "));
*/
