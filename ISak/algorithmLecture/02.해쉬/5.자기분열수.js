function findAnswer(myMap) {
  for (x of myMap.keys()) {
    if (x === myMap.get(x)) {
      return x;
    }
  }
}

function solution(input) {
  let myMap = new Map();
  input = input.sort();
  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  console.log(myMap);
  return findAnswer(myMap) || -1;
}
let input = [1, 1, 2, 5, 5, 5, 5, 5, 3, 3, 3, 3, 5];
let output = solution(input);
console.log(output);
