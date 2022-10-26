const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(BigInt);

ans = `${input[0] + input[1]}`;
console.log(ans);
