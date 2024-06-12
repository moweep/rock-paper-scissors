function getHumanChoice() {
	let answer = prompt("Rock, paper, or scissors?");
	return answer;
}
console.log("You chose " + getHumanChoice() + ".");

function getComputerChoice(min, max) {	
		return Math.floor(Math.random() * (max - min) + min);
}

if ((getComputerChoice(1, 4)) == 1) {
	console.log("Computer chose rock.");
} else if ((getComputerChoice(1, 4)) == 2) {
	console.log("Computer chose paper.");
} else {
	console.log("Computer chose scissors.");
}

let humanScore = 0;
let computerScore = 0;