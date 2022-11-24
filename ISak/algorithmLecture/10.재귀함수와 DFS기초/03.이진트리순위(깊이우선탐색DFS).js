function preOrder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}
console.log(preOrder(1));

function inOrder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;

    DFS(2 * v);
    answer += v + " ";
    DFS(2 * v + 1);
  }
  DFS(n);
  return answer;
}
console.log(inOrder(1));

function postOrder(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;

    DFS(2 * v);
    DFS(2 * v + 1);
    answer += v + " ";
  }
  DFS(n);
  return answer;
}
console.log(postOrder(1));
