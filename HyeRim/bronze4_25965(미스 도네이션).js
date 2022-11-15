const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = [];
for(let i = 1; i < input.length; i += 1) {
  let len = +input[i];
  let cases = input.slice(+i+1, +i+len+1);
  let [k,d,a] = input[i+len+1].split(' ').map(Number);
  
  let sum = 0;
  for (let j = 0; j < cases.length; j++) {
      let c = cases[j].split(' ').map(Number);
      let cal = c[0]*k+c[2]*a-c[1]*d;
      
      if (cal >= 0) sum+=cal;
  }

  answer.push(sum);

  i += len + 1;
}

console.log(answer.join('\n'))
