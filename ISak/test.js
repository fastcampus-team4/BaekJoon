const input = require('fs').readFileSync('input.txt').toString().split('\n');
let num = input[0]1;
console.log(input[1])
for (let i = 1; i <= num; i += 1) {
  let arr = input[i].split(' ');

  let testCase = Number(arr[0])
  let sum = 0;
  for (let j = 1; j <= testCase; j += 1) {
    sum += Number(arr[j]);
  }
  let average = sum / testCase;
  let res = arr.filter((elem) => Number(elem) > average);

  console.log(`${((res.length / testCase) 100).toFixed(3)}%`);
}