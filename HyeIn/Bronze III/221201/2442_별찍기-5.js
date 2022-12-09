// https://www.acmicpc.net/problem/2442
// 출력 : 트리

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
let j = 1;
let ans;

for (let i = input - 1; i >= 0; i--) {
  // 4 3 2 1 0
  let space = "";
  let ans = "";
  space = " ".repeat(i);

  while (j < input * 2) {
    // 1 3 5 7 9
    let star = "";
    star = "*".repeat(j);
    ans = space + star;
    console.log(ans);
    j += 2;
    break;
  }
}

/* 이렇게 하면 안될 것 같은데.. 
while 문으로 i 가 4일 때 공백 4개와 star 1 개를 출력하고, i 가 3 일 때 start 3, i 2 일 때 start 5, ... 를 i 가 0이 될 때까지 반복한다
*/

// 구글링
/* 이렇게 하면 엄청 간단한데...
let output = '';
for (let i = 1; i <= input; i++) {
  output += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n'
}

console.log(output);
*/
