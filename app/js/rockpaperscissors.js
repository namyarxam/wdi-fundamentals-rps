////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === 'rock'){
        return 'rock';
    } else if(move === 'paper'){
        return 'paper';
    } else if(move === 'scissors'){
        return 'scissors';
    } else{
        getInput();
    }
}

function getComputerMove(move) {
    if (move == true){
        return move;
    } else { 
        var cMove = randomPlay();
        return cMove;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove){
        winner = 'tie';
    } else if(playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
    } else if(playerMove === 'rock' && computerMove === 'paper'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'scissors'){
        winner = 'computer';
    } else if(playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    } else if(playerMove === 'scissors' && computerMove === 'paper'){
        winner = 'player';
    } else if(playerMove === 'scissors' && computerMove === 'rock'){
        winner = 'computer';
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    if(computerWins < 5 && playerWins < 5){
        getInput();
        var ppick = getPlayerMove(prompt);
        var cpick = randomPlay();
        var winner = getWinner(ppick, cpick);
        if(winner === 'player'){
            console.log("You win! You chose " + ppick + " while the computer picked " + cpick);
            playerWins++;
            console.log("Score is PLAYER: " + playerWins + " to COMPUTER: " + computerWins);
        } else if(winner === 'computer'){
            console.log("You lost. You chose " + ppick + " but the computer picked " + ppick);
            computerWins++;
            console.log("Score is PLAYER: " + playerWins + " to COMPUTER: " + computerWins);
        } else{
            console.log("Both you and the computer picked " + ppick + ". Tie.");
            console.log("Score is PLAYER: " + playerWins + " to COMPUTER: " + computerWins);
        }
    }else if(computerWins === 5){
        console.log("Sorry, the computer wins!");
        console.log("Score is PLAYER: " + playerWins + " to COMPUTER: " + computerWins);
    }else if(playerWins === 5){
        console.log("Congrats! You win!");
        console.log("Score is PLAYER: " + playerWins + " to COMPUTER: " + computerWins);
    }
    return [playerWins, computerWins];
}

