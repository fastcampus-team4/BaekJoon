function findOneFreqChar(myMap) {
  for (x of myMap.keys()) {
    if (1 === myMap.get(x)) {
      return x;
    }
  }
}

function solution(input) {
  let myMap = new Map();

  for (x of input) {
    myMap.set(x, (myMap.get(x) || 0) + 1);
  }
  let ch = findOneFreqChar(myMap);

  return ch ? input.indexOf(ch) + 1 : -1;
}
let input = "statistics";
let output = solution(input);
console.log(output);
