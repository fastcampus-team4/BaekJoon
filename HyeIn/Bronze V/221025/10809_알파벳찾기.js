let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();

const result = [];
for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));

/* 
String.fromCharCode() 와 아스키코드를 활용하여 알파벳 문자를 만들고 
indexOf 메서드로 input 에 이 값이 있을 때 그 값의 index 를, 없으면 -1 을 출력
join 메서드로 문자열로 합치고 공백으로 나눠서 출력
*/
