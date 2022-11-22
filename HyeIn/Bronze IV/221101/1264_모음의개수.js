let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().toLowerCase());

let vowel = ["a", "e", "i", "o", "u"];
while (true) {
  let answer = 0;
  let s = input.shift();
  if (s === "#") break;
  for (let i of s) {
    if (vowel.includes(i)) {
      answer += 1;
    }
  }
  console.log(answer);
}

/* 
while 반복문을 돌린다음, shift 메서드로 배열의 첫번째 요소를 계속 잘라서 반환하여 각 알파벳이 vowel 에 들어있으면 answer 를 하나씩 더하도록 설정. 그리고 자른 게 마지막 # 이 들어오면 while 문을 끝냄
*/
