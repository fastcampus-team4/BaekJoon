//node.js의 file system 모듈 불러오기
const fs = require("fs");
//읽어드린 정보를 toString()함수를 통해 문자열로 변환, split()함수를 통해 배열화
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

//parseInt() 함수를 통해 문자열 정수값 반환
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
