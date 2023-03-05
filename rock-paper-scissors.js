function getComputerChoice(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

num = getComputerChoice(1, 3);

if (num === 1) {
	console.log("Rock");
} else if (num === 2) {
	console.log("Paper");
} else if (num === 3) {
	console.log("Scissors");
}