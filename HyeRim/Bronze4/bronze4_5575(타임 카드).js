const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = '';

for(let i = 0; i < input.length; i += 1) {
  const person = input[i].split(' ').map(e => Number(e));
  let [h1, m1, s1, h2, m2, s2] = person;
  let hour;
  let min;
  let sec;

  if(s2 < s1) {
    m2 -= 1;
    s2 += 60;
  }
  sec = s2 - s1;

  if(m2 < m1) {
    h2 -= 1;
    m2 += 60;
  }
  min = m2 - m1;

  hour = h2 - h1;

  answer += `${hour} ${min} ${sec}\n`;

}

console.log(answer)