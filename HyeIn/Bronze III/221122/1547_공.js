// https://www.acmicpc.net/problem/1547

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

let cups = [1, 2, 3];

for (let i = 1; i < input.length; i++) {
  [a, b] = input[i].split(" ").map(Number);

  if (a === cups[0] && b === cups[1]) {
    [cups[0], cups[1]] = [cups[1], cups[0]];
  } else if (a === cups[0] && b === cups[2]) {
    [cups[0], cups[2]] = [cups[2], cups[0]];
  } else if (a === cups[1] && b === cups[0]) {
    [cups[1], cups[0]] = [cups[0], cups[1]];
  } else if (a === cups[1] && b === cups[2]) {
    [cups[1], cups[2]] = [cups[2], cups[1]];
  } else if (a === cups[2] && b === cups[0]) {
    [cups[0], cups[2]] = [cups[2], cups[0]];
  } else if (a === cups[2] && b === cups[1]) {
    [cups[1], cups[2]] = [cups[2], cups[1]];
  }
}
console.log(cups[0]);

// 이게.. 맞나?
