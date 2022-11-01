let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let arr = [];
for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    arr.push(i);
  }
  if (arr.length === 2) break;
}
console.log(arr.join("\n"));

/* 
빈 배열을 변수 arr 에 넣는다
for 문으로 i 가 30 까지 반복적으로 돌도록 설정
만약 input 에 i 가 포함되지 않았다면 arr 에 그 i 를 집어 넣어라라고 설정
만약 arr 의 길이가 2 와 같다면 멈추도록 설정 -> 두개까지만 출력하도록
그리고 arr 의 배열의 요소를 연결해 하나의 문자로 만드는 join 메소드로 줄바꿈하여 출력
*/
