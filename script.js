let playerSelection = prompt("Choose Rock, Paper or Scissors")
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))

function computerPlay(){
    const choice_array = ['rock', 'paper', 'scissors'];
    let computerChoice = choice_array[Math.floor(Math.random()*3)];
    return computerChoice;

};

function playRound(playerSelection, computerSelection){

    let responseString = null;

    if(playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'){

        responseString = `You win ${playerSelection} beats ${computerSelection}`

    } else if (playerSelection === computerSelection) {
        responseString = `It is a draw, you both chose ${playerSelection}`
    } else {
        responseString =`You lose ${computerSelection} beats ${playerSelection}`
    }

    return responseString
}
