const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

let ans;

switch (input[0]) {
  case 'A':
    ans = 4.0;
    break;
  case 'B':
    ans = 3.0;
    break;
  case 'C':
    ans = 2.0;
    break;
  case 'D':
    ans = 1.0;
    break;
  case 'F':
    ans = 0;
    break;
}
if (input[1]) {
  switch (input[1]) {
    case '+':
      ans += 0.3;
      break;
    case '-':
      ans -= 0.3;
      break;
  }
}

console.log(ans.toFixed(1));
