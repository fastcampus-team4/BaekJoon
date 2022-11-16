const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let K = -1
for(let i = 1 ; i <= input[0]; i += 1) {
  const [A, B] = input[i].split(' ').map(Number)

  if(A > B) continue;
  if(K === -1) {
    K = B; continue;
  }
  if(K > B) K = B;
}
console.log(K)
