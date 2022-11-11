function solution(input, k) {
  let mySet = new Set(input.toLowerCase());
  for (x of input) {
    if (65 <= x.charCodeAt(0) && x.charCodeAt(0) <= 90) {
      return mySet.size + 1 <= k; // 쉬프트키 카운트
    }
  }
  return mySet.size <= k;
}
let input = "Gabg";
let k = 4;
let output = solution(input, k);
console.log(output);
