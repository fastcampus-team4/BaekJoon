let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);

function solution(s) {
  return `long `.repeat(s / 4) + `int`;
}
console.log(solution(input));

/* 
문자열을 더하면 연결해주지만 산술연산자가 숫자인 경우 연산결과로 숫자값을 반환, 그 외에 계산이 불가한 경우 NaN 으로 반환됨. 따라서 반복문을 중첩하거나 변수를 활용해 반복문과 함께 변수의 값을 조작하여 결과를 내야함
따라서 repeat 메서드로 long 을 input 의 4 를 나눈 값만큼 곱해주도록 설정함
*/
