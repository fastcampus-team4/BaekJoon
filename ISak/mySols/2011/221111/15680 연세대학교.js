const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

if (input==='0'){
  console.log('YONSEI')
}else{
  console.log('Leading the Way to the Future')
}