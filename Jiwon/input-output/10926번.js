const fs = require("fs");
//trim() 함수를 통해 문자열 양 끝 공백 제거
const inputData = fs.readFileSync(0, "utf8").toString().trim();

console.log(`${inputData}` + `??!`);
//console.log(`${inputData}??!`);
