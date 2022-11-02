const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString();

N = BigInt(input);

console.log(`${N % 20000303n}`);
