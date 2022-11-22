let filePath = process.platform === "linux" ? 0 : "example.txt";
let [n, m, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
O = n - m;
X = n - O;
Ok = n - k;
Xk = n - Ok;

console.log(Math.min(O, Ok) + Math.min(X, Xk));

/* 앞뒷면의 각 ox 가 겹치는 최소값을 더해주면 됨 */
