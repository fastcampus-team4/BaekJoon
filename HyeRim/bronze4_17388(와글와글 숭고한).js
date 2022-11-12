const filePath = process.platform === 'linux' ? 0 : './input.txt'
let [s, k, h] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let answer = ''

if(s + k + h >= 100) {
  answer = "OK"
} else if(s < k && s < h) {
  answer = "Soongsil"
} else if(k < s && k < h) {
  answer = "Korea"
} else if(h < s && h < k) {
  answer = "Hanyang"
}


console.log(answer)