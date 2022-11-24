let ans = "";
function solution(n) {
  if (n === 0) {
    return ans;
  }
  ans = `${n % 2}` + ans;
  const x = Math.floor(n / 2);

  return solution(x);
}
let n = 13;
let output = solution(n);
console.log(output);
