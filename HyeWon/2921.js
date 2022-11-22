// https://www.acmicpc.net/problem/2921
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);
/**
 * n = 2
 * 0-0 1-0 2-0
 * (0-1) 1-1 2-1
 * (0-2) (1-2) 2-2
 * (3 + 2 + 1)
 * 점의 갯수 : 12 -> (3 + 2 + 1) * 2
 *
 * n = 3
 * 0-0 1-0 2-0 3-0
 * (0-1) 1-1 2-1 3-1
 * (0-2) (1-2) 2-2 3-2
 * (0-3) (1-3) (2-3) 3-3
 * (4 + 3 + 2 + 1)
 * 점의 갯수 : 30 -> (4 + 3 + 2 + 1) * 3
 */

let sum = 0;
for (let i = 1; i <= n + 1; i++) {
  sum += i;
}
let answer = n * sum;
console.log(answer);
