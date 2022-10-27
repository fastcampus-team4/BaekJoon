let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = BigInt(input);
answer = input % BigInt(20000303);
console.log(answer.toString());
