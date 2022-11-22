function solution(input) {
  input.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });
  let ans = input.length;
  for (let i = 0; i < input.length; i++) {
    for (let j = input.length - 1; j > i; j--) {
      if (input[i][1] < input[j][1]) {
        ans--;
        break;
      }
    }
  }
  return ans;
}
let input = [
  [172, 67],
  [172, 90],
  [183, 65],
  [180, 70],
  [170, 72],
  [181, 60],
];

let output = solution(input);
console.log(output);
