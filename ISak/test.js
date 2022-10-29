function solution(s) {
  let answer = "NO";
  let str = "";

  for (let i = 0; i < s.length; i++) {
    str = s.split("");
    str.splice(i, 1);
    if (str.join("") === str.reverse().join("")) answer = "YES";
  }

  return answer;
}
//회문인데 psudo회문은 아닌 경우
console.log(solution("abba")); // YES
console.log(solution("abcabbakcba")); // YES
console.log(solution("abcacbakcba")); // NO
