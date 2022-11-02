function isOdd(n) {
  return n % 2 === 0 ? false : true;
}
function solution(s, k) {
  let length = s.length;
  let myMap = new Map();
  for (x of s) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  let countOdd = 0;
  for (x of myMap.values()) {
    if (isOdd(x)) countOdd += 1;
  }
  if (k >= countOdd && k <= length) {
    return true;
  } else {
    return false;
  }
}
let s = "abcabcabc";
let k = 2;
let output = solution(s, k);
console.log(output);
