function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	var your = yourLeft + yourRight;
	var friends = friendsRight + friendsLeft;
	var yourMax = Math.max(yourLeft, yourRight);
	var friendMax = Math.max(friendsRight, friendsLeft);

	if (your === friends) {
		return true;
	}
	return false;
}
