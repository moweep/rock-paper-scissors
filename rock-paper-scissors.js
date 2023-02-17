function getComputerChoice(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

	const num = getComputerChoice(1, 3)
	
	if (num == 1) {
		console.log("Computer picked scissors!");
	} else if (num == 2) {
		console.log("Computer picked rock!");
	} else if (num == 3) {
		console.log("Computer picked paper!");
	}