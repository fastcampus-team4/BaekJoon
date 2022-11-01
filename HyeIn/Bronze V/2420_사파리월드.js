let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let answer = Math.abs(a - b);
console.log(answer);

/* 
Math.abs() 함수는 절대값을 구하는 함수로
a-b 를 하면 -2 - 5 로 -7 이 되니까 해당 함수를 사용하면 a 와 b 사이의 차이를 구할 수 있다.
*/
