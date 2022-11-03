function solution(input) {
  ans = 1;
  max = input[0];
  console.log(input);
  for (let i = 0; i < input.length - 1; i++) {
    if (max < input[i + 1]) {
      ans++;
      max = input[i + 1];
    }
  }

  return ans;
}
let input = [7, 7, 7, 9, 9, 9, 12];
let output = solution(input);
console.log(output);
