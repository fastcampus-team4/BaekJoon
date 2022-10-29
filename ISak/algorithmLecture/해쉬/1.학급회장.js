function findLeader(myMap) {
  let maxVotes = 0;
  let leader;

  for (x of myMap.keys()) {
    if (myMap.get(x) > maxVotes) {
      leader = x;
      maxVotes = myMap.get(x);
    }
  }
  return leader;
}
function solution(input) {
  let myMap = new Map();

  for (x of input) {
    // console.log(Object.keys(myMap))
    if (myMap.has(x)) {
      myMap.set(x, myMap.get(x) + 1);
    } else {
      myMap.set(x, 1);
    }
  }
  // console.log(myMap);
  return findLeader(myMap);
}
let input = "AAAAABBCCDDDD";
let output = solution(input);
console.log(output);
