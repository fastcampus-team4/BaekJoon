const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

// const score = {
//   'A+': 4.3,
//   A0: 4.0,
//   'A-': 3.7,
//   'B+': 3.3,
//   B0: 3.0,
//   'B-': 2.7,
//   'C+': 2.3,
//   C0: 2.0,
//   'C-': 1.7,
//   'D+': 1.3,
//   D0: 1.0,
//   'D-': 0.7,
//   F: 0.0,
// };
switch (input) {
  case 'A+':
    console.log('4.3');
    break;
  case 'A0':
    console.log('4.0');
    break;
  case 'A-':
    console.log('3.7');
    break;
  case 'B+':
    console.log('3.3');
    break;
  case 'B0':
    console.log('3.0');
    break;
  case 'B-':
    console.log('2.7');
    break;
  case 'C+':
    console.log('2.3');
    break;
  case 'C0':
    console.log('2.0');
    break;
  case 'C-':
    console.log('1.7');
    break;
  case 'D+':
    console.log('1.3');
    break;
  case 'D0':
    console.log('1.0');
    break;
  case 'D-':
    console.log('0.7');
    break;
  case 'F':
    console.log('0.0');
    break;
}
