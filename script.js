let playerSelection = prompt("Choose Rock, Paper or Scissors")
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))

function computerPlay(){
    const choice_array = ['rock', 'paper', 'scissors'];
    let computerChoice = choice_array[Math.floor(Math.random()*3)];
    return computerChoice;

};

function playRound(playerSelection, computerSelection){

    let outcomeString = null;

    if(playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'){

        outcomeString = `You win ${playerSelection} beats ${computerSelection}`

    } else if (playerSelection === computerSelection) {
        outcomeString = `It is a draw, you both chose ${playerSelection}`
    } else {
        outcomeString =`You lose ${computerSelection} beats ${playerSelection}`
    }

    return outcomeString
}
