const filePath = process.platform === "linux" ? 0 : "./input.txt";
let inputData = require("fs").readFileSync(filePath).toString().split("\n");

//문자열을 숫자열로 변환하는 함수 Number()
const N = Number(inputData[0]);
for (i = 1; i <= N; i++) {
  let txt = inputData[i];
  let result = txt[0] + txt[txt.length - 1];
  console.log(result);
}
