let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const answer = (Math.sqrt(3) * input * input) / 4;

console.log(answer);

// 루트3 input * input/2 * 1/2 = 루트3/4 input의 제곱
