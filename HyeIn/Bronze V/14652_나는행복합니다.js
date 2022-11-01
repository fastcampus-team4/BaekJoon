let filePath = process.platform === "linux" ? 0 : "example.txt";
let [N, M, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

console.log(parseInt(K / M), parseInt(K % M));

/* `${M / K} ${M % K}`; */
