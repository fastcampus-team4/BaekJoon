function solution(input) {
  let ans = 0;
  const FIVE = 5;
  input.sort((a, b) => a - b);
  let l = 0,
    r = input.length - 1;
  while (l <= r) {
    if (input[r] + input[l] <= FIVE) {
      l++;
    }
    r--;
    ans++;
  }
  return ans;
}
let input = [5, 5, 5, 5, 5];
let output = solution(input);
console.log(output);
