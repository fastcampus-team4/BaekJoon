function solution(input) {
  let ans = 0;
  let dRow = [-1, 0, 1, 0];
  let dCol = [0, 1, 0, -1];
  const n = input.length;
  let bool = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      bool = true;
      for (let k = 0; k < 4; k++) {
        if (
          i + dRow[k] >= 0 &&
          i + dRow[k] < n &&
          j + dCol[k] >= 0 &&
          j + dCol[k] < n
        ) {
          if (input[i + dRow[k]][j + dCol[k]] > input[i][j]) {
            bool = false;
            break;
          }
        }
      }
      if (bool) {
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

console.log(!undefined);
