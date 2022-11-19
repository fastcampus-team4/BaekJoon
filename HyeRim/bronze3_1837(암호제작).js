const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);


let num = BigInt(input[0])
let k = Number(input[1])

let arr = new Array(k).fill(1)
let result = "GOOD"

for(let i = 2; i <= k; i += 1) {
  let bigI = BigInt(i)
  if(arr[i]){
      if(num%bigI === 0n){
          result = `BAD ${i}`
          break
      }
      let n = 2
      while(i*n <= k){
          arr[i*n] = 0
          n++
      }
  }
}

console.log(result)