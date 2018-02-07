function arrayMaximalAdjacentDifference(inputArray) {
	var max = 0;

	for (let i = 0; i < inputArray.length; i++) {
		var diff = Math.abs(inputArray[i] - inputArray[i + 1]);
		if (diff > max) {
			max = diff;
		}
	}
	return max;
}
