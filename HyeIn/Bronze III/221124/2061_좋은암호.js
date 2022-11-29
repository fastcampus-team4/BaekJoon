// https://www.acmicpc.net/problem/2061
let filePath = process.platform === "linux" ? 0 : "../example.txt";
let [p, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let ans = true;

for (let i = 2n; i < k; i++) {
  if (p % i === 0n) {
    ans = false;
    console.log(`BAD ${i}`);
    break;
  }
}
if (ans) console.log(`GOOD`);

// ??? 1837 암호제작과 똑같이 품
