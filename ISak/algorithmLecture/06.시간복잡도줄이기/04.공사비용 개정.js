function solution(input) {
  let lt = 0;
  let rt = 0;
  let sum = 0;
  let length = 0;

  for (rt = 0; rt < input.length; rt++) {
    sum += input[rt];
    while (sum > m) {
      sum -= input[lt];
      lt++;
    }
    if (length < rt - lt + 1) {
      length = rt - lt + 1;
    }
  }
  return length;
}
let input = [100, 50, 120, 50, 150, 0, 50, 60];
let m = 400;
let output = solution(input, m);
console.log(output);
