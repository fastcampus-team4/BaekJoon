let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString();

console.log(input);

/* 
입력받은 그대로 이기 때문에 console.log 로 바로 출력하는 것이 아니라 입력을 가져와서 console.log 해줘야 함
*/
