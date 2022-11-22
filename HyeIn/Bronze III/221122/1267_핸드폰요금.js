// https://www.acmicpc.net/problem/1267

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let calls = input[1].split(" ").map(Number);
let y = 0;
let m = 0;
for (c of calls) {
  y += c % 30 === 0 ? (c / 30 + 1) * 10 : Math.ceil(c / 30) * 10;
  m += c % 60 === 0 ? (c / 60 + 1) * 15 : Math.ceil(c / 60) * 15;
}

if (y > m) {
  console.log(`M ${m}`);
} else if (y < m) {
  console.log(`Y ${y}`);
} else {
  console.log(`Y M ${y}`);
}

/* 쓴 시간이 각 요금제의 정해진 시간의 배수라면 초과될때마다 청구가 되니까 +1 을 해주고 아니라면 정해진 시간을 나눈 값을 올림하여 곱해준다 */
