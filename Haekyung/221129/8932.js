const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const [a, b, c, d, e, f, g] = input[i].trim().split(' ').map(Number);
  let total =
    Math.floor(track(9.23076, 26.7, 1.835, a)) +
    Math.floor(field(1.84523, 75, 1.348, b)) +
    Math.floor(field(56.0211, 1.5, 1.05, c)) +
    Math.floor(track(4.99087, 42.5, 1.81, d)) +
    Math.floor(field(0.188807, 210, 1.41, e)) +
    Math.floor(field(15.9803, 3.8, 1.04, f)) +
    Math.floor(track(0.11193, 254, 1.88, g));

  console.log(total);
}
function field(A, B, C, P) {
  const score = A * Math.pow(P - B, C);
  return score;
}
function track(A, B, C, P) {
  const score = A * Math.pow(B - P, C);
  return score;
}
