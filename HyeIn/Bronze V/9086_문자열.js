/* 
let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let char = input[i].trim();
  let last = char.length - 1;
  console.log(`${input[i][0]}${input[i][last]}`);
}
*/

// 이 방법도 가능. 위에 것과 속도 동일.
let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let testCase = input[i].trim();
  console.log(`${testCase.charAt(0)}${testCase.slice(-1)}`);
}
