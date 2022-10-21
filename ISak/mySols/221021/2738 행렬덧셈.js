const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);

// input 으로 k인덱스부터 N 행의 길이를 가진 매트릭스를 만든다.
function createMatFromInput(N, k) {
  const A = [];
  for (let i = 0; i < N; i++) {
    const x = input[k + i].split(' ').map(Number);
    A.push(x);
  }
  return A;
}

//행렬 더하는 함수
function sumMatrix(A, B) {
  let C = [];

  for (let i = 0; i < N; i++) {
    let x = [];
    for (let j = 0; j < M; j++) {
      x.push(A[i][j] + B[i][j]);
    }
    C.push(x);
  }
  return C;
}
// 행렬을 출력하는 함수
function printMatrix(C) {
  ans = '';
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      ans += `${C[i][j]} `;
    }

    ans += '\n';
  }
  console.log(ans);
}

const A = createMatFromInput(N, 1);
const B = createMatFromInput(N, 1 + N);

const C = sumMatrix(A, B);
printMatrix(C);
