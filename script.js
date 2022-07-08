const choice_array = ['rock', 'paper', 'scissors'];

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const playerWins = document.querySelector('.playerWins');
const computerWins = document.querySelector('.computerWins');
const resultText = document.querySelector('.result');

let playerWinCount = 0;
let computerWinCount = 0;



//gameplayLoop();

function initGame(firstGame){
    playerWinCount = 0;
    computerWinCount = 0;

    if(firstGame)
        resultText.textContent = "Time to play rock paper scissors, first to 5 wins"

    updateRoundCounts();

}

function updateRoundCounts(){
    playerWins.textContent = `Player Wins: ${playerWinCount}`;
    computerWins.textContent = `Computer Wins: ${computerWinCount}`
}

function updateResultText(result){
    resultText.textContent = result;
}

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
        playerWinCount++;

    } else if (playerSelection === computerSelection) {
        outcomeString = `It is a draw, you both chose ${playerSelection}`;
        
    } else {
        outcomeString =`You lose ${computerSelection} beats ${playerSelection}`;
        computerWinCount++;
    }

    updateResultText(outcomeString);
    updateRoundCounts();

    if(playerWinCount == 5){
        updateResultText("You are a winner, lets play again");
        initGame(false);
    } else if (computerWinCount == 5){
        updateResultText("Computer is the winner, try again next time");
        initGame(false);
    }
        
};

// function gameplayLoop(){
//     let playerWins = 0;
//     let computerWins = 0;

//     for( let round = 0; round < 5; round++ ){
//         let computerSelection = computerPlay();
//         let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
//         let outcome = playRound(playerSelection, computerSelection);

//         switch (outcome) {
//             case 0:
//                 playerWins++;
//                 break;
//             case 1:
//                 break;
//             case 2:
//                 computerWins++;
//                 break;
//         }
//     }

//     if(playerWins > computerWins){
//         console.log(`Congratulations you are won ${playerWins} rounds to ${computerWins} round`);
//     } else {
//         console.log(`Sorry you lost ${playerWins} rounds to ${computerWins} rounds`);
//     }
// }

initGame(true);

paperButton.addEventListener('click', () => playRound('paper', computerPlay()));
rockButton.addEventListener('click', () => playRound('rock', computerPlay()));
scissorsButton.addEventListener('click', () => playRound('scissors', computerPlay()));
