const filePath = process.platform === 'linux' ? 0 : './input.txt'
let input = require('fs').readFileSync(filePath).toString().trim();


console.log(input === 'N' || input === 'n' ? 'Naver D2' : 'Naver Whale')