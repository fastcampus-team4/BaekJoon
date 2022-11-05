const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().toLowerCase().split('\n');

function vowelFind(s) {
  let count = 0;
  let v = ['a', 'e', 'i', 'o', 'u'];

  for(let x of s) {
    console.log(v.includes(x))
    if(v.includes(x)) {
      count += 1;
    }
  }
  return count;
}

for(let i = 0; i < input.length - 1; i += 1) {
  console.log(vowelFind(input[i]))
}


