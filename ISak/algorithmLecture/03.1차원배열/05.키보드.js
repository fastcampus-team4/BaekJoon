function solution(input, k) {
  let mySet = new Set(input.toLowerCase());
  console.log(mySet);

  // 대문자 유무 체크
  for (x of input) {
    if (65 <= x.charCodeAt(0) && x.charCodeAt(0) <= 90) {
      return mySet.size + 1 === k; // 쉬프트키 카운트
    }
  }
  return mySet.size === k;
}
let input = "TeacHer";
let k = 6;
let output = solution(input, k);
console.log(output);
