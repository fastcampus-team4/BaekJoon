let filePath = process.platform === "linux" ? 0 : "../example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
console.log(input.length);

// 양 끝 공백 제거해주는 메소드 사용할 것.
// ??? 근데 문자마다 나눠서 배열로 만들어주는 split 을 사용하지 않는 것인지, trim 에 그런 기능이 있는건지 ???
