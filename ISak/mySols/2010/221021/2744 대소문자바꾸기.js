const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

//소문자를 대문자로 대문자를 소문자로 바꾸는 함수
function changeCase(ch) {
  const diff = 'a'.charCodeAt() - 'A'.charCodeAt();
  const charCode = ch.charCodeAt(); // Number

  if (charCode >= 'a'.charCodeAt()) {
    ch = String.fromCharCode(charCode - diff);
  } else {
    ch = String.fromCharCode(charCode + diff);
  }
  return ch;
}

// 문제 풀이
let ans = '';

for (let i = 0; i < input.length; i++) {
  ans += changeCase(input[i]);
}

console.log(ans);
