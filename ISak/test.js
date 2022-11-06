let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let answer = [];
for (let i = 0; i < 3; i++) {
  for (let j = 3; j < input.length; j++) {
    answer.push(input[i] + input[j] - 50);
  }
}
answer = Math.min.apply(null, answer);

console.log(Math.min(answer));

/* 
 console.log(Math.min(answer)) 하면 NaN 뜸 
 Math.min 메서드는 인수 중에 비교할 수 없는 값이 포함되어 있으면 NaN을 반환
 근데 answer 값 안에 typeof 를 확인해보면 모두 number 가 뜸
 왜 NaN 이 뜨는 걸까?
*/
