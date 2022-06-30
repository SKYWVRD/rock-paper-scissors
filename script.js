const choice_array = ['rock', 'paper', 'scissors'];

gameplayLoop();

function computerPlay(){
    let computerChoice = choice_array[Math.floor(Math.random()*3)];
    return computerChoice;

};

function playRound(playerSelection, computerSelection){

    let outcomeString = null;
    let outcome = null;

    if(playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'){

        outcomeString = `You win ${playerSelection} beats ${computerSelection}`;
        outcome = 0;

    } else if (playerSelection === computerSelection) {
        outcomeString = `It is a draw, you both chose ${playerSelection}`;
        outcome = 1;
        
    } else {
        outcomeString =`You lose ${computerSelection} beats ${playerSelection}`;
        outcome = 2;
    }

    console.log(outcomeString);

    return outcome;
};

function gameplayLoop(){
    let playerWins = 0;
    let computerWins = 0;

    for( let round = 0; round < 5; round++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        let outcome = playRound(playerSelection, computerSelection);

        switch (outcome) {
            case 0:
                playerWins++;
                break;
            case 1:
                break;
            case 2:
                computerWins++;
                break;
        }
    }

    if(playerWins > computerWins){
        console.log(`Congratulations you are a won ${playerWins} rounds to ${computerWins} round`);
    } else {
        console.log(`Sorry you lost ${playerWins} rounds to ${computerWins} rounds`);
    }
}
