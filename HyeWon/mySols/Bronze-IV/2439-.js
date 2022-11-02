const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const N = Number(input);

// sol 1
for (let i = 0; i < N; i++) {
  // 줄 바꿈을 위한 반복문
  let star = '';
  for (let j = N - 1; j >= 0; j--) {
    // 값을 누적하기 위한 반복문
    star += j <= i ? '*' : ' ';
    // console.log(star);
  }
  console.log(star);
}

// sol 2
let num = Number(input);
let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  console.log(star.join(''));
}
