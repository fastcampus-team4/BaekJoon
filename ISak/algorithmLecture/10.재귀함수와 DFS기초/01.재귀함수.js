let ans = "";
function solution(n) {
  if (n === 1) {
    ans = "1 " + ans;
    return ans;
  }

  ans = `${n} ` + ans;
  return solution(n - 1);
}
let input = 10;
let output = solution(input);
console.log(output);
