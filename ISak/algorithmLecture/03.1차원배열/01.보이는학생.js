function solution(input) {
  ans = 0;
  console.log(input);
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      ans++;
    }
  }

  return ans;
}
let input = [130, 135, 148, 140, 145, 150, 150, 153];
let output = solution(input);
console.log(output);
