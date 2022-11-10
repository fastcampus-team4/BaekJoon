let filePath = process.platform === "linux" ? 0 : "example.txt";
let [r, c, n] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let cctv1 = Math.ceil(r / n);
let cctv2 = Math.ceil(c / n);
console.log(cctv1 * cctv2);

/* 가로 / 범위, 세로 / 범위하고 둘을 곱해주면 필요한 양이 나옴 */
