let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString();
input = parseInt(input);
result = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

/* 
반복문 for 문으로 두번 돌려서 별과 줄바꿈을 같이 출력
구구단 출력과 비슷해보임
*/
