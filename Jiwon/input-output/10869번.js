const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
//js에는 몫을 구하는 연산자가 따로 없기 때문에 나눗셈 결과를 parseInt처리하여 정수값을 가져와야한다
console.log(parseInt(A / B));
console.log(A % B);
