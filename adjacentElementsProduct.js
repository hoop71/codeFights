function adjacentElementsProduct(inputArray) {
	var test = inputArray[0] * inputArray[1];

	for(var i = 1; i < inputArray.length -1; i++) {
		if (inputArray[i] * inputArray[i + 1] > test)
			var test = inputArray[i] * inputArray[i + 1];
	}
	return	test;
}