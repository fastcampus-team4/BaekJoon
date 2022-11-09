function solution(input) {
  let sums = [];
  let sum;
  for (let i = 0; i < 5; i++) {
    //row
    sum = input[i].reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    sums.push(sum);
  }
  for (let i = 0; i < 5; i++) {
    //column
    sum = 0;
    for (let j = 0; j < 5; j++) {
      sum += input[j][i];
    }
    sums.push(sum);
  }

  sum = 0;
  for (let i = 0; i < 5; i++) {
    // diagonal
    sum += input[i][i];
  }
  sums.push(sum);
  sum = 0;
  for (let i = 0; i < 5; i++) {
    // anti-diagonal
    for (let j = 0; j < 5; j++) {
      if (i + j === 4) {
        sum += input[i][j];
      }
    }
  }
  sums.push(sum);
  return Math.max(...sums);
}
let input = [
  [57, 65, 22, 33, 11, 11],
  [15, 66, 77, 34, 21, 13],
  [55, 12, 11, 55, 11, 55],
  [54, 33, 66, 88, 11, 22],
  [88, 99, 12, 16, 18, 33],
  [11, 100, 22, 68, 88, 17],
];
let output = solution(input);
console.log(output);
