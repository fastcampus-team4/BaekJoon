// https://www.acmicpc.net/problem/15873
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const length = input.length;

if (length === 2) {
  // 둘다 10이 아닌 경우
  console.log(Number(input[0]) + Number(input[1]));
} else if (length === 4) {
  // 둘다 10인 경우
  console.log(20);
} else {
  // 둘 중 하나가 10인 경우
  if (Number(input[length - 1]) === 0) {
    // B가 10인 경우
    console.log(Number(input[0]) + 10);
  } else {
    // A가 10인 경우
    console.log(10 + Number(input[length - 1]));
  }
}
