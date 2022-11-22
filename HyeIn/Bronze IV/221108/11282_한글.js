let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = String.fromCharCode(Number(input) + 44031);

console.log(answer);

/* 
한글의 유니코드는 44032 부터 시작하기 때문에 44031 을 더해줘야 원하는 값을 얻을 수 있음
*/
