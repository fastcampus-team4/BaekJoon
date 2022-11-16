const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(BigInt);

let sign = "";    // 결과

// 3개의 세트이므로 3번 반복
for (let i = 0; i < 3; i++) {
  let index = parseInt(input[0]);    // 각 세트의 첫번째 줄
  const arr = input.slice(1, index + 1);    // 각 세트의 값들
  input.splice(0, index + 1);    // 해결된 세트 제거
  let sum = 0n;    // 1개 세트 합
  // 1개의 세트 합 구하기
  for (let j = 0; j < arr.length; j++) {
    sum += BigInt(arr[j]);
  }
  distinguish(sum);    // 부호 구별하기
}

console.log(sign);    // 결과 출력

// 부호 구별하기 함수
function distinguish(sum) {
  if (sum == 0) {
    sign += `0\n`;
  } else if (sum < 0) {
    sign += `-\n`;
  } else {
    sign += `+\n`;
  }
}