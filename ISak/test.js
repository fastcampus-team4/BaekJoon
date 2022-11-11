function solution(n, k) {
  l1 = [];
  for (let i = 0; i < n; i++) {
    l1.push(i + 1);
  }
  for (let i = 0; i < n - 1; i++) {
    let tmp = k;
    while (tmp !== 0) {
      l1.push(l1.shift());
      tmp--;
    }
    l1.pop();
  }
  return l1[0];
}
console.log(solution(10, 4));
