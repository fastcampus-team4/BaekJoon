class Robot {
  constructor(k) {
    this.position = [0, 0];
    this.direction = "right";
    this.fuel = k;
  }
  nextPosition() {
    let [row, col] = this.position;
    switch (this.direction) {
      case "right":
        return [row, col + 1];
      case "bottom":
        return [row + 1, col];
      case "left":
        return [row, col - 1];
      case "top":
        return [row - 1, col];
    }
  }
  turn() {
    switch (this.direction) {
      case "right":
        this.direction = "bottom";
        break;
      case "bottom":
        this.direction = "left";
        break;
      case "left":
        this.direction = "top";
        break;
      case "top":
        this.direction = "right";
        break;
    }
    this.fuel--;
    console.log(this.direction);
    return this.direction;
  }
  go() {
    this.position = this.nextPosition();
    this.fuel--;
    console.log(this.position);
  }
}
function isValidNextPosition(input, myRobot) {
  let [row, col] = myRobot.nextPosition();
  const N = input.length;
  if (input[row][col] === 1) return false;
  if (row < 0 || col < 0) return false;
  if (row >= N || col >= N) return false;
  return true;
}

function solution(input, k) {
  let ans;
  let myRobot = new Robot(k);
  console.log(myRobot.fuel);
  while (myRobot.fuel > 0) {
    if (isValidNextPosition(input, myRobot)) {
      myRobot.go();
    } else {
      myRobot.turn();
    }
  }
  return myRobot.position;
}
let input = [
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0],
];
let k = 25;
let output = solution(input, k);
console.log(output);
