function solution(input) {
  let myMap = new Map();
  let ans;

  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
    if (myMap.get(x) >= 2) return x;
  }

  return -1;
}
let input = "abccbaacz";
let output = solution(input);
console.log(output);
