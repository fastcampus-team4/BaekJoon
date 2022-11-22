function solution(n, r) {
  const myArr = new Array(n + 1);
  for (let i = 0; i < myArr.length; i++) {
    myArr[i] = new Array(r + 1);
  }
  function comb(n, r) {
    if (n < r) {
      return 0;
    }
    if (r === 0) {
      return 1;
    }
    if (!myArr[n][r]) {
      myArr[n][r] = comb(n - 1, r - 1) + comb(n - 1, r);
    }
    return myArr[n][r];
  }

  return comb(n, r);
}
let [n, r] = [33, 19];
let output = solution(n, r);
console.log(output);
