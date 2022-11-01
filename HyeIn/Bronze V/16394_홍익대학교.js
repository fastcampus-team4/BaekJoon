let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
answer = BigInt(input) - 1946n;

console.log(answer.toString());
