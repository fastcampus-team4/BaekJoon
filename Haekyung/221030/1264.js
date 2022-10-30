const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (i = 0; i < N.length - 1; i++) {
  let cnt = 0;
  console.log(N[i]);
  let s = N[i].toLowerCase();
  for (j = 0; j < N[i].length; j++) {
    if (
      s[j] === 'a' ||
      s[j] === 'e' ||
      s[j] === 'i' ||
      s[j] === 'o' ||
      s[j] === 'u'
    ) {
      cnt++;
    }
  }
  console.log(cnt);
}
