let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = BigInt(input);
answer = input % 20000303n; // bigint 대신 뒤에 n 붙여서도 사용 가능
/* answer = input % BigInt(20000303); */
console.log(answer.toString());
