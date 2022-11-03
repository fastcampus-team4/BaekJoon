function solution(input) {
  let score = [input[0]];
  let ans = input[0];

  for (let i = 1; i < input.length; i++) {
    score.push(input[i] * (score[i - 1] + 1));
    ans += input[i] * (score[i - 1] + 1);
  }
  return ans;
}
let input = [0, 1, 0, 1, 0, 1, 1, 1];
let output = solution(input);
console.log(output);
