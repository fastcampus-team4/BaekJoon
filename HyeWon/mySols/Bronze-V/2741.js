// https://www.acmicpc.net/problem/2741
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('');

const n = Number(input);
let answer = '';

// 개행문자(\n)를 활용해서 하나의 변수에 For문으로 계속 집어넣은 다음 console.log로 받아왔던 변수를 딱 한 번만 출력하는 방법
for (let i = 1; i <= n; i++) {
  // answer = answer + (i + '\n');
  answer = answer + `${i}\n`;
}

console.log(answer);
