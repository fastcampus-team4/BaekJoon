const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

N = Number(input);
let a = N * 0.78;
let b = N * (1 - 0.2 * 0.22);
console.log(a, b);
