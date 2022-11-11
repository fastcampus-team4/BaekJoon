const filePath = process.platform === "linux" ? 0 : "./ISak/input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let [A,B,C,D,E] = input
let ans = 0;

if (A < 0){
  ans += -C * A + D + B*E
}else {
    ans += (B-A)*E
}
console.log(ans)
