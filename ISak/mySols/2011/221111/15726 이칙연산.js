const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [X, Y, Z] = input;

let b = (X * Y) / Z;
let c = (X / Y) * Z;

ans = Math.max(b, c);
console.log(Math.trunc(ans));
