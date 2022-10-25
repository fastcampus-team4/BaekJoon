const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/fastcampus-study/baekjoon/BaekJoon/Jiwon/input.txt";
let inputData = require("fs").readFileSync(filePath).toString();

const result = [];
//알파벳을 아스키코드(ASCII)라고 생각하고 이것을 문자 또는 문자열로 바꾸면 연속된 숫자 97 ~ 122다.
for (let i = 97; i <= 122; i++) {
  //console.log(String.fromCharCode(i)); a부터z까지 출력
  result.push(inputData.indexOf(String.fromCharCode(i)));
}
//join()메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
console.log(result.join(" "));
