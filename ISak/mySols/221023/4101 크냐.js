// https://www.acmicpc.net/problem/4101
// 틀렸습니다.
const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
//마지막 항 제거

// 왼쪽이 크면 Yes 아니면 No 를 반환하는 함수
const isLeftLarger = (a, b) => {
  return a > b ? "Yes" : "No";
};

for (let i = 0; i < input.length; i++) {
  let pair = input[i].split(" ").map(Number);
  const a = pair[0];
  const b = pair[1];
  if (a === 0 && b === 0) break;

  const ans = isLeftLarger(a, b);
  console.log(ans);
}
