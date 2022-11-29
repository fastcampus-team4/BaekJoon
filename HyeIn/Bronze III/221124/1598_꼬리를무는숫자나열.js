// https://www.acmicpc.net/problem/1598

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ax = Math.ceil(a / 4);
let bx = Math.ceil(b / 4);
let ay = a % 4;
let by = b % 4;
if (ay === 0) {
  ay = 4;
}
if (by === 0) {
  by = 4;
}
// 4, 8, 12, 16 ... 은 좌표 상 4 인데 나머지는 0 이라서 4로 변경
let answer = Math.abs(ax - bx) + Math.abs(ay - by);

console.log(answer);

/* 
좌표:
1 2 3 4      1
5 6 7 8      2
9 10 11 12   3
13 14 15 16  4
...

1 2 3 4

input : 11 33
11 = [3][3]
33 = [9][1]
절대값(3-9) + 절대값(2-0) = 8
 */
