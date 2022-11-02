function isOdd(n) {
  return n % 2 === 0 ? false : true;
}
function solution(input) {
  let myMap = new Map();
  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }

  let countOdd = 0;
  for (x of myMap.values()) {
    if (isOdd(x)) {
      countOdd += 1;
    }
  }
  if (countOdd < 2) {
    return true;
  } else {
    return false;
  }
}
let input = "abbac";
let output = solution(input);
console.log(output);
