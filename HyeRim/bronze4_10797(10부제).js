const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const car = input[1].split(' ').map(Number);
for(let i = 0; i < car.length; i += 1) {

  if(car[i] === Number(input[0])) {
    answer += 1
  }
  
}
console.log(answer);