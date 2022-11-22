let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();
input = parseInt(input);

let answer = 1;
for (let i = 1; i <= input; i++) {
  answer *= i;
}
console.log(answer);

/* 
팩토리얼 : 어떤 범위에 있는 모든 정수를 곱하는 것, 1 부터 시작
*/
