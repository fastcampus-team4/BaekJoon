let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));

function solution(time) {
  let st = 0;
  let et = 0;

  for (let i = 0; i < time.length; i++) {
    if (i < 3) {
      if (i === 0) st += Number(time[i]) * 60 * 60;
      if (i === 1) st += Number(time[i]) * 60;
      if (i === 2) st += Number(time[i]);
    }
    if (i >= 3) {
      if (i === 3) et += Number(time[i]) * 60 * 60;
      if (i === 4) et += Number(time[i]) * 60;
      if (i === 5) et += Number(time[i]);
    }
  }
  let totalTime = et - st;
  let timeHour = parseInt((totalTime / 3600) % 24);
  let timeMinute = parseInt((totalTime / 60) % 60);
  let timeSecond = totalTime % 60;

  return `${timeHour} ${timeMinute} ${timeSecond}`;
}

console.log(solution(a));
console.log(solution(b));
console.log(solution(c));

/* 다시 해볼 것 */
