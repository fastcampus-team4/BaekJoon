const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function stringTimes( s , k){
  let res= ""
  for( let i =0 ; i < k ; i++){
    res += s
  }
  return res
}

let N = Number(input);
let ans =""
for ( let i =0 ; i < N ; i++){
  ans += stringTimes(' ', N-i-1)
  ans += stringTimes('*', 2*i +1) + '\n'
}
console.log(ans)