const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
let t = input[1].split(" ").map(Number);

const yPlan = (n) => {
  return 10 + Math.floor(n / 30) * 10;
};
const mPlan = (n) => {
  return 15 + Math.floor(n / 60) * 15;
};
let y = 0;
let m = 0;
for (let i = 0; i < N; i++) {
  y += yPlan(t[i]);
  m += mPlan(t[i]);
}

let ans;
if (y === m) {
  ans = `Y M ${y}`;
} else if (y > m) {
  ans = `M ${m}`;
} else {
  ans = `Y ${y}`;
}
console.log(ans);
