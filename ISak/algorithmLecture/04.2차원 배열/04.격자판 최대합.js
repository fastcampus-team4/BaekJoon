function solution(input) {
  let ans = [];
  let sums = [];
  let sum;
  //row
  for (let i = 0; i < 5; i++) {
    sum = input[i].reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    sums.push(sum);
  }
  //column
  for (let i = 0; i < 5; i++) {
    sum = 0;
    for (let j = 0; j < 5; j++) {
      sum += input[j][i];
    }
    sums.push(sum);
  }
  sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += input[i][i];
  }
  sums.push(sum);

  sum = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i + j === 4) {
        console.log(input[i][j]);
        sum += input[i][j];
      }
    }
  }
  sums.push(sum);

  return Math.max(...sums);
}
let input = [
  [17, 19, 12, 11, 15],
  [17, 36, 30, 83, 11],
  [19, 30, 70, 53, 75],
  [17, 22, 67, 47, 37],
  [15, 37, 78, 93, 59],
];
let output = solution(input);
console.log(output);
