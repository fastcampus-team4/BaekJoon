let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();
let num = Number(input);
let arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}
console.log(arr.join("\n"));

/* 시간 초과
let input = require("fs").readFileSync("/dev/stdin").toString();
let num = Number(input);
for (let i = 1; i <= num; i++) {
  console.log(i);
} 
*/

/* 
그냥 냅다 console.log 로 하면 시간이 오래걸려서 시간초과가 뜬다
그래서 빈 배열(arr)을 만들고 for 문 안에서 빈 배열(arr)에 답을 push 메소드로 밀어넣은 뒤
console.log 로 arr 를 출력해주는데 이때 arr 는 배열이기 때문에 join 메소드로 배열을 풀어주고 \n 줄바꿈 해주기
*/
