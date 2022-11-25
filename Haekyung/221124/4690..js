for (let a = 2; a < 101; a++) {
  for (let b = 2; b < 100; b++) {
    for (let c = b; c < 100; c++) {
      for (let d = c; d < 100; d++) {
        if (a * a * a === b * b * b + c * c * c + d * d * d) {
          console.log(`Cube = ${a}, Triple = (${b},${c},${d})`);
        }
      }
    }
  }
}
