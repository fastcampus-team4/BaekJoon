function isOdd(n) {
  return n % 2 === 0 ? false : true;
}
function solution(input) {
  let myMap = new Map();
  for (x of input) {
    if (myMap.has(x)) {
      myMap.set(x, myMap.get(x) + 1);
    } else {
      myMap.set(x, 1);
    }
  }
  console.log(myMap);
  let countOdd = 0;
  for (x of myMap.values()) {
    if (isOdd(x)) {
      countOdd += 1;
    }
  }
  if (countOdd >= 2) {
    return false;
  } else {
    return true;
  }
}
let input = "ccccc";
let output = solution(input);
console.log(output);
