//못품

let ans = "";
let row = "";
let arr = [];
function solution(n, m) {
  // for (let i =1 ; i<= n ; i++){
  //   for (j = 1; j <= n ; j++){
  //     ans += `${i} ${j}\n`
  //   }
  // }

  function recur(n, m) {
    if (m === 0) {
      // console.log(arr)
      ans += `\n`;
      return;
    }
    for (let i = 1; i <= n; i++) {
      ans += `${i} `;
      arr.push(i);
      // row += `${i} `

      recur(n, m - 1);
    }
  }
  recur(n, m);

  ans;
  return ans;
}
let [n, m] = [3, 3];
let output = solution(n, m);
console.log(output);
