const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
function sol(N, K) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      cnt++;
    }
    if (cnt === K) {
      return i;
    }
  }
  return 0;
}

console.log(sol(N, K));
