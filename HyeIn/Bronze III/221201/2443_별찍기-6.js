// https://www.acmicpc.net/problem/2443
// 출력 : 거꾸로 트리, 별은 9 7 5 3 1 이고 공백은 0 1 2 3 4 로 이전 문제랑 반대로

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);

// 이전 문제 구글링한 걸로 가져옴
// 정답~~~
let output = "";
for (let i = input; i > 0; i--) {
  // 이전 문제는 1 이 들어오면 4 + 1 이 됨
  // 지금 문제는 1 이 들어오면 0 + 9 가 되어야 함

  output += " ".repeat(input - i) + "*".repeat(i * 2 - 1) + "\n";
}
console.log(output);

/* 이전 문제랑 똑같은 방식으로 했는데 안됨ㅠ
let j = 9;
let ans;

for (let i = 0; i < input; i++) {
  // 0 1 2 3 4 
  let space = "";
  let ans = "";
  space = " ".repeat(i);

  while (j > 0) {
    // 9 7 5 3 1
    let star = "";
    star = "*".repeat(j);
    ans = space + star;
    console.log(ans);
    j -= 2;
    break;
  }
} 
*/
