let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) result += input[i].toLowerCase();
  else result += input[i].toUpperCase();
}

console.log(result);

/* 
빈 문자(result)를 하나 지정해주고
for 문으로 input 의 length 만큼 돌려서
if 문으로 만약 input 의 각 index 와 input 의 각 index 를 하나씩 대문자로 바꾼 것과 같다면 소문자로 바꿔서 빈 문자(result)에 넣고
아닌 것은 빈 문자(result)에 대문자로 바꿔서 넣으라고 한 뒤
result 를 출력
*/
