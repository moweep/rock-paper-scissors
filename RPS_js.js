function getHumanChoice() {
	let answer = prompt("Rock, paper, or scissors?");
	return answer.toLowerCase();
}
const humanSelection = getHumanChoice();
console.log("You chose " + humanSelection + ".");

const computerSelection = getComputerChoice(1, 3);
function getComputerChoice(min, max) {	
		return Math.floor(Math.random() * (max - min + 1) + min);
}

if (computerSelection == 1) {
	console.log("Computer chose rock.");
} else if (computerSelection == 2) {
	console.log("Computer chose paper.");
} else {
	console.log("Computer chose scissors.");
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	playRound(humanSelection, computerSelection);
	playRound(humanSelection, computerSelection);
	
	function playRound(humanSelection, computerSelection) {
	   if (humanSelection == "rock" && computerSelection == 2) {
		return console.log("Paper beats rock, you lose :(" 
								    + "\n Human score: " + humanScore +
									"\n Computer score: " + ++computerScore);
	} else if (humanSelection == "rock" && computerSelection == 3) {
		return console.log("Rock beats scissors, you win!"
									+ "\n Human score: " + ++humanScore +
									"\n Computer score: " + computerScore);
	} else if (humanSelection == "paper" && computerSelection == 1) {
		return console.log("Paper beats rock, you win!"
									+ "\n Human score: " + ++humanScore +
									"\n Computer score: " + computerScore);
	}  else if (humanSelection == "paper" && computerSelection == 3) {
		return console.log("Scissors beats paper, you lose :("
									+ "\n Human score: " + humanScore +
									"\n Computer score: " + ++computerScore);
	} else if (humanSelection == "scissors" && computerSelection == 1) {
		return console.log("Rock beats scissors, you lose :("
									+ "\n Human score: " + humanScore +
									"\n Computer score: " + ++computerScore);
	} else if (humanSelection == "scissors" && computerSelection == 2) {
		return console.log("Scissors beats paper, you win!"
									+ "\n Human score: " + ++humanScore +
									"\n Computer score: " + computerScore);
	} else {
		return console.log("It's a draw."
									+ "\n Human score: " + humanScore +
									"\n Computer score: " + computerScore);
	}
	}
}

playGame();
playGame();