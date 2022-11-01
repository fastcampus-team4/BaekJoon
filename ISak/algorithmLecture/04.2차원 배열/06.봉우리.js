//input[x][y]가 봉우리인가?
function isPeak(input, x, y) {
  const N = input.length;
  const center = input[x][y];
  const checkList = [];
  if (x - 1 >= 0) checkList.push([x - 1, y]);
  if (x + 1 < N) checkList.push([x + 1, y]);
  if (y - 1 >= 0) checkList.push([x, y - 1]);
  if (y + 1 < N) checkList.push([x, y + 1]);

  for ([i, j] of checkList) {
    if (input[i][j] > center) {
      return false;
    }
  }
  return true;
}

function solution(input) {
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (isPeak(input, i, j)) {
        ans++;
      }
    }
  }
  return ans;
}

let input = [
  [11, 15, 17, 23, 13, 5, 12],
  [25, 18, 11, 16, 21, 7, 22],
  [37, 13, 17, 22, 14, 11, 33],
  [35, 27, 38, 34, 31, 22, 12],
  [38, 22, 33, 21, 25, 33, 11],
  [11, 33, 12, 13, 26, 35, 12],
  [17, 22, 23, 11, 15, 13, 21],
];
let output = solution(input);
console.log(output);
