let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const answer = input.charCodeAt();

console.log(answer);

/* 
.charCodeAt() : index에 해당하는 문자의 unicode 값을 리턴
*/
