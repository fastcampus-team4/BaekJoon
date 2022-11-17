function solution(cost, m) {
  let maxLength = 0;
  let lt = 0;
  let rt = 0;
  let cnt = 0;
  for (rt = 0; rt < cost.length; rt++) {
    if (cost[rt] === 0) cnt++;
    while (cnt > m) {
      if (cost[lt] === 0) {
        cnt--;
      }
      lt++;
    }
    if (maxLength < rt - lt + 1) maxLength = rt - lt + 1;
  }
  return maxLength;
}
let cost = [1, 1, 0, 0, 1, 1, 0];
let m = 3;
let output = solution(cost, m);
console.log(output);
