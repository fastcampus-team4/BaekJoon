// https://www.acmicpc.net/problem/1000

const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');
input = ['1', '2'];

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
