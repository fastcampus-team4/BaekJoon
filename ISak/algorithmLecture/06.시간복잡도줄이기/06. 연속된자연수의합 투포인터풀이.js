function solution(n) {
  const nums = new Array(n).fill(0).map((e, i) => i + 1);
  let lt = 0;
  let rt = 0;
  let sum = 0;
  let cnt = 0;
  for (rt = 0; rt < nums.length - 1; rt++) {
    sum += nums[rt];
    while (sum > n) {
      sum -= nums[lt];
      lt++;
    }

    if (sum === n) {
      cnt++;
    }
  }
  return cnt;
}
let n = 98765;
let output = solution(n);
console.log(output);
