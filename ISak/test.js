const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let n = Number(input);

if ((n-1)%8===0 ){
  console.log(1)
}
else if ((n-5)%8===0 ){
  console.log(5)
}
else if ( n%8 ===0 || (n-2)%8 === 0){
  console.log(2)
}
else if ( (n+1)%8 ===0 || (n-3)%8 === 0){
  console.log(3)
}
else if ( (n+2)%8 ===0 || (n-4)%8 === 0){
  console.log(4)
}