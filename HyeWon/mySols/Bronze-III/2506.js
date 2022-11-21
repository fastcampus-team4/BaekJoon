// https://www.acmicpc.net/problem/2506
// https://www.acmicpc.net/problem/2501
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.shift());
const arr = input[0].split(' ').map(Number);

function solution(nums) {
  let answer = 0,
    score = 0;
  for (let x of nums) {
    if (x === 1) {
      score++;
      answer += score;
    } else score = 0;
  }
  return answer;
}

console.log(solution(arr));
