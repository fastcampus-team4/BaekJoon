const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

// if (input === 'A+') {
//   console.log('4.3');
// } else if (input === 'A0') {
//   console.log('4.0');
// } else if (input === 'A-') {
//   console.log('3.7');
// } else if (input === 'B+') {
//   console.log('3.3');
// } else if (input === 'B0') {
//   console.log('3.0');
// } else if (input === 'B-') {
//   console.log('2.7');
// } else if (input === 'C+') {
//   console.log('2.3');
// } else if (input === 'C0') {
//   console.log('2.0');
// } else if (input === 'C-') {
//   console.log('1.7');
// } else if (input === 'D+') {
//   console.log('1.3');
// } else if (input === 'D0') {
//   console.log('1.0');
// } else if (input === 'D-') {
//   console.log('0.7');
// } else if (input === 'F') {
//   console.log('0.0');
// }

let score = '';

switch(input) {
  case 'A+':
    score = '4.3';
    break;
  case 'A0':
    score = '4.0';
    break;
  case 'A-':
    score = '3.7';
    break;
  case 'B+':
    score = '3.3';
    break;
  case 'B0':
    score = '3.0';
    break;
  case 'B-':
    score = '2.7';
    break;
  case 'C+':
    score = '2.3';
    break;
  case 'C0':
    score = '2.0';
    break;
  case 'C-':
    score = '1.7';
    break;
  case 'D+':
    score = '1.3';
    break;
  case 'D0':
    score = '1.0';
    break;
  case 'D-':
    score = '0.7';
    break;
  case 'F':
    score = '0.0';
    break;
}

console.log(score);