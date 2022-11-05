const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

let answer = ''
const speed = (input[1] - input[0]);

if(speed <= 0) {
  answer = 'Congratulations, you are within the speed limit!'
} else {
  if(speed > 1 && speed <= 20) {
    answer = 'You are speeding and your fine is $100.'
  } else if(speed > 21 && speed <=30 ) {
    answer = 'You are speeding and your fine is $270.'
  } else {
    answer = 'You are speeding and your fine is $500.'
  }
}


console.log(answer)