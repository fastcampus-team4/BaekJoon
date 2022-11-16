const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(BigInt);

let [N,M] = input;
const a = N*M;

console.log( BigInt(a / 2n) )


