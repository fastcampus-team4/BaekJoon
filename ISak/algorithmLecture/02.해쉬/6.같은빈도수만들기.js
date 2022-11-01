function findAnswer(myMap) {
  let max = Math.max(...myMap.values());
  let ans = [];
  for (x of myMap.values()) {
    ans.push(max - x);
  }
  return ans;
}
function solution(input) {
  let myMap = new Map([
    ["a", 0],
    ["b", 0],
    ["c", 0],
  ]);
  input = [...input].sort();

  for (x of input) {
    myMap.set(x, myMap.get(x) + 1);
  }

  return findAnswer(myMap);
}

let input = "aa";
let output = solution(input);
console.log(output);
