const myObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
function solution(input) {
  for (key of Object.keys(myObj)) {
    input = input.replaceAll(key, myObj[key]);
  }
  return Number(input);
}
let input = "eightsixzerofivesevenfive";
let output = solution(input);
console.log(output);
