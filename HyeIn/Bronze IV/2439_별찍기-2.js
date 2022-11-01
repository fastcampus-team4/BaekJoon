let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = Number(input);
result = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input - 1 - i; j++) {
    result += " ";
  }
  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

// 처음 했던 방식 : 출력 형식이 잘못됨
/* result = "";
for (let i = 0; i < input; i++) {
  result += " ".repeat(input - i);
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result); */

// 다른 방식
/* 
for (let i = 0; i < input; i++) {
  let star = '';
    
  for (let j = input - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}
*/
