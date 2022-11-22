let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = "0b" + input;
let answer = (BigInt(input) * 17n).toString(2);
console.log(answer);

/* 
BigInt형에서 2진수에 관한 계산을 할 때 binary 형태로 바꿔서 계산을 해야합니다. 이를 위해서 입력값에 "0b"를 추가해서 계산해줘야합니다. toString 메서드를 활용해서 2진수로 바꾸고, 이를 출력한 결과가 문제의 답이 됩니다.
*/
