function isIPv4Address(inputString) {
	var splits = inputString.split('.');
	console.log(splits);

	for (let i = 0; i < splits.length; i++) {
		if (inputString[0] == '.' || splits.length != 4) {
			console.log('starts with . or != 4');
			return false;
		} else if (!(splits[i] >= 0) || !(splits[i] <= 255) || splits[i] == '') {
			console.log(splits[i] + ' ' + 'Not with range');
			return false;
		}
	}
	return true;
}
