let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el.trim()));
let answer = 0;
for (X of input) {
  answer += X;
}
x = parseInt(answer / 60);
y = answer % 60;
// y = answer - x * 60; -> 위 코드보다 메모리는 적지만 시간은 오래걸림

console.log(x + "\n" + y);

// input 의 모든 값을 더한 뒤 60 으로 나눠서 정수로 반환한 것이 분(x), 다시 총값에서 60 을 나눈 후 나온 나머지 값을 초로 설정하여 반환
