// https://www.acmicpc.net/problem/17256
const filePath = process.platform === 'linus' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
// a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z) = c.x, c.y, c.z
// c.x = a.z + b.x -> b.x = c.x - a.z
// c.y = a.y × b.y -> b.y = c.y / a.y
// c.z = a.x + b.z -> b.z = c.z - a.x
const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);

const bx = c[0] - a[2];
const by = parseInt(c[1] / a[1]);
const bz = c[2] - a[0];

console.log(bx, by, bz);
