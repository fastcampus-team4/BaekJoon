const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solveCase(testCase) {
  const N = testCase[0];
  if (N === 0n) return true;

  let sum = 0n;
  for (let i = 1; i < testCase.length; i++) {
    sum = (sum + testCase[i]) % N;
  }
  return sum === 0n;
}
function solution() {
  let testCase = [];
  let answer = "";
  for (let i = 2; i < input.length; i++) {
    if (input[i] === "") {
      answer += solveCase(testCase) ? `YES\n` : `NO\n`;
      testCase = [];
    } else {
      testCase.push(BigInt(input[i]));
    }
  }

  answer += solveCase(testCase) ? `YES\n` : `NO\n`;
  console.log(answer);
}

if (input[0] !== "0") {
  solution();
}
