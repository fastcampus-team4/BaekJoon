function isOdd(n) {
  return n % 2 === 0 ? false : true;
}
function solution(input) {
  let myMap = new Map();
  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  console.log(myMap);
  let oddSum = 0;
  let evenSum = 0;
  let thereIsOdd = false;
  for ([key, val] of myMap) {
    if (isOdd(val)) {
      oddSum += val - 1;
      thereIsOdd = true;
    } else {
      evenSum += val;
    }
  }
  if (thereIsOdd) oddSum++;

  return oddSum + evenSum;
}

let input = 'abaabaaaaaaa';
let output = solution(input);
console.log(output);
