const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString();

console.log(`.  .   .
|  | _ | _. _ ._ _  _
|/\\|(/.|(_.(_)[ | )(/.`)