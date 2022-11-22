// 못 풀었다.. 문제 자체가 이해가 안된다..

let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);

const A = [];
const B = [];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
}

for (let j = N + 1; j <= N * 2; j++) {
  B.push(input[j].split(" ").map(Number));
}

// A 행렬과 B 행렬의 좌표를 정하여 더해줘야 하니 중첩 for 문 사용
for (let r = 0; r < A.length; r++) {
  // A 의 length 는 3
  res = [];
  for (let l = 0; l < A[r].length; l++) {
    // A 의 r 번째 배열의 length 는 3
    res.push(Number(A[r][l]) + Number(B[r][l]));
  }
  console.log(...res);
  // 스프레드 연산자를 사용하지 않으면 각 배열로 출력
}
