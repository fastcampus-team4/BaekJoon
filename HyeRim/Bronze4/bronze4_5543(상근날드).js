const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [a,b,c,x,y] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);


const burger = [a,b,c].sort((a,b)=>b-a).pop()
console.log(burger)

const drink = [x,y].sort((a,b)=>b-a).pop()
console.log(drink)

console.log((burger + drink) - 50)