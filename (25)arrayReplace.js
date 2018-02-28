function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  var a = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }

  return inputArray;
}
