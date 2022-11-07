const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('');

let str = 'abcdefghijklmnopqrstuvwxyz';
let arr = new Array(26).fill(0);

for(let i = 0; i < input.length; i += 1) {
  arr[str.indexOf(input[i])]++
}

console.log(arr.join(' '))