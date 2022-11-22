let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let answer = input[0] / input[1] + "\n";
answer += input[0] % input[1];
console.log(answer);

/* 
BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
첫번째 오는 값이 클 수 있기 때문에 사용함
js 는 parseInt 로 긴 숫자를 사용하면 자기들이 알아서 몇 승으로 자르기 때문에 BigInt 로 사용해야 함
*/
