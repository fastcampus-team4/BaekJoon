const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.pop()
let ans= ""
for (x of input){
  let [name, age, weight] = x.split(' ');
  if (Number(age)>= 18 || Number(weight)>=80){
    ans += `${name} Senior\n`
  }else{
    ans += `${name} Junior\n`
  }
}
console.log(ans);