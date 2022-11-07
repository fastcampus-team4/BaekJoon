function solution(n) {
  let xValues = [];
  for (let length = 2; length < n; length++) {
    // n = length * x + (length-1)*length/2 를 만족하는 x 값
    let x = (n - ((length - 1) * length) / 2) / length;
    if (x <= 0) {
      console.log(length);
      break;
    } else if (Number.isInteger(x)) {
      xValues.push(x);
    }
  }
  return xValues.length;
}
let n = 98765;
let output = solution(n);
console.log(output);
