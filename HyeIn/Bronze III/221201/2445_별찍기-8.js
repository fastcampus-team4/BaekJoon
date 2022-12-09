// https://www.acmicpc.net/problem/2445
// 출력: 보타이, 공백이 역트리, 트리 모양 합친 것으로 보임
// 공백 = 8 6 4 2 0 2 4 6 8, 별 = 1 1 / 2 2 / 3 3 / 4 4 / 55 / 4 4 / 3 3 / 2 2 /1 1

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
let output = "";
let ans = [];

for (let i = input - 1; i >= 0; i--) {
  output = "";
  output += "*".repeat(input - i) + " ".repeat(i * 2) + "*".repeat(input - i);
  ans.push(output);
}
for (let i = 1; i < input; i++) {
  output = "";
  output += "*".repeat(input - i) + " ".repeat(i * 2) + "*".repeat(input - i);
  ans.push(output);
}

console.log(ans.join(`\n`));

/* 출력형식이 잘못되었다고 나와서 공백을 at 기호로 치환해봤다
@@@@@@@@@@
*@@@@@@@@*
**@@@@@@**
***@@@@***
****@@****
**********
****@@****
***@@@@***
**@@@@@@**
*@@@@@@@@*
@@@@@@@@@@
알고 보니 첫줄과 마지막 줄에 공백을 한번더 출력해줘서 나는 오류였다

for 문의 시작과 끝을 바꿔주었다
*@@@@@@@@*
**@@@@@@**
***@@@@***
****@@****
**********
****@@****
***@@@@***
**@@@@@@**
*@@@@@@@@*
*/
