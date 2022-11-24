function solution(input) {
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < input.length; i++) {
    let x = input[i].reduce((a, b) => a + b, 0);
    sum += x;
    sumArr.push(sum);
  }
  // sumArr 에서 totalSum/2 이상인 값중에 제일 큰 index를 찾자
  let max = sumArr.length - 1;
  let min = 0;
  const ansArr = [];
  let answer;
  let totalSum = sumArr[sumArr.length - 1];

  while (min <= max) {
    let half = Math.ceil((min + max) / 2);
    if (totalSum / 2 <= sumArr[half]) {
      max = half - 1;
      answer = half;
    } else {
      min = half + 1;
    }
  }

  return answer + 1;
}
let input = [
  [2, 3, 1, 5, 6],
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1],
];
let output = solution(input);
console.log(output);
