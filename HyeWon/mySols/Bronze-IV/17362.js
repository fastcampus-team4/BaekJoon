// https://www.acmicpc.net/problem/17362
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const n = Number(input);

/**
 * 8번 움직인 후 다시 처음 부터 반복하는 걸 알 수 있다
 * 주어진 값을 8로 나눈 나머지가 0, 7, 6인경우 (손가락 개수인 1~5 사이면 그대로 출력하면 된다)
 * 0 -> 2, 7 -> 3, 6 -> 4 로 출력해주면된다.
 */

const answer = n % 8;
if (answer === 0) {
  console.log(2);
} else if (answer === 7) {
  console.log(3);
} else if (answer === 6) {
  console.log(4);
} else {
  console.log(answer);
}
