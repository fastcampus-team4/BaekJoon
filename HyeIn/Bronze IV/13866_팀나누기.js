let filePath = process.platform === "linux" ? 0 : "example.txt";
let [a, b, c, d] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.abs(a + d - (b + c)));

/* 스킬레벨은 오름차순으로 정렬되어 나옴 잊지 말것... */
