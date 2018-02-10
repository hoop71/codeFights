function avoidObstacles(inputArray) {
  var a = inputArray.sort(compareNumbers);
  console.log(a);

  var max = a.reduce(function(a, b) {
    return Math.max(a, b);
  });

  for (let i = 1; i <= max + 1; i++) {
    if (
      a.every(element => {
        return element % i != 0;
      })
    ) {
      return i;
    }
  }
}

function compareNumbers(a, b) {
  return a - b;
}
