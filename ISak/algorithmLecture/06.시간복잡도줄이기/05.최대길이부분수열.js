function solution(cost, m) {
  let left = 0;
  let right = 0;
  let maxLength = 0;

  for (let left = 0; left < cost.length; left++) {
    let length = 0;

    let leftZero = m;
    for (let right = left; right < cost.length; right++) {
      if (leftZero === 0 && cost[right] === 0) break;
      if (cost[right] === 1) {
        length++;
      }
      if (cost[right] === 0 && leftZero > 0) {
        length++;
        leftZero--;
      }
      if (maxLength < length) {
        maxLength = length;
      }
    }
  }
  return maxLength;
}
let cost = [1, 1, 0, 0, 1, 1, 0];
let m = 3;
let output = solution(cost, m);
console.log(output);
