// https://www.acmicpc.net/problem/1085

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let [x, y, w, h] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log(Math.min(x, y, w - x, h - y));

/* 
내 위치가 곧 직사각형의 경계선까지 가는 길이이고
그 반대 경계선까지 가는 길이가 직사각형의 w 와 y 를 내 위치에서 빼주는 것
*/
