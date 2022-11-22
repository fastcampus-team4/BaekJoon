// https://www.acmicpc.net/problem/2566
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(' ').map(Number);
  const diameter = arr[0] / 63360;
  const rotate = arr[1];
  const hour = arr[2] / 3600;
  if (rotate === 0) return;

  const distance = Math.PI * diameter * rotate;
  const MPH = distance / hour;
  console.log(`Trip #${i + 1}: ${distance.toFixed(2)} ${MPH.toFixed(2)}`);
}
