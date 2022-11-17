const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let Y = 0;
let M = 0;
const cost = input[1].split(' ').map(Number)

for(let i = 0; i < input[0]; i += 1) {
  Y += cost[i] % 30 === 0 ? (cost[i] / 30 + 1) * 10 : Math.ceil(cost[i] / 30) * 10;
  M += cost[i] % 60 === 0 ? (cost[i] / 60 + 1) * 15 : Math.ceil(cost[i] / 60) * 15;
}

if (M === Y) console.log("Y M " + M);
else if (M > Y) console.log("Y " + Y);
else console.log("M " + M);
