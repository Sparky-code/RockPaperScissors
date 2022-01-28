

// Global variables
// Messages
  win = 'You Win!';
  loss = 'You Lose...';
  tie = 'Tie Game.';
  again = 'Try Again.';
  replay = ' Play Again?';

  // Counts 
  let playerWins = 0; 
  let computerWins = 0; 
  let tieGames = 0;
  //tracks score over rounds **upgrade to looping function later

  let getScore = (playerWins, computerWins) => {  // add replay function later
  if (playerWins > computerWins) {
    return alert('You\'ve Won!');
  } else if (computerWins > playerWins) {
    return alert ('You\'ve Lost...')
  } else if (tieGames > (computerWins || playerWins)) {
    return alert ('Tie Game.')
  }
}

let playGame = (playRound) => {

// A function that randomly returns rock, paper, or scissors 
   rpsArray = ["Rock", "Paper", "Scissors"];
   computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];

// User inputs a value (rock, paper, or scissors) + case insensitive
  playSel = prompt('Rock, Paper, or Scissors?', '').toUpperCase();
  console.log(playSel); 

// Computer play
  compSel = computerPlay.toUpperCase(); 
  console.log(compSel);

playRound; // plays a single round of RPS
  // informs player of a tie  
    if (playSel === compSel) {
      console.log(tie + replay);
      return alert('wins: ' + ' ' + playerWins + ' | ' 
      + 'losses: ' + ' ' + computerWins +  ' | ' 
      + 'Tie Games:' + ' ' + ++tieGames);

  // informs player of a loss
    } else if ((playSel === 'ROCK' && compSel === 'PAPER') ||
            (playSel === 'PAPER' && compSel === 'SCISSORS') || 
            (playSel === 'SCISSORS' && compSel === 'ROCK')) {

            //track playRound output - LOSS
              console.log(loss + replay); 
              return alert('losses: ' + ' ' + ++computerWins + ' | ' 
              + 'wins:' + ' ' + playerWins + ' | ' + 'Tie Games:' 
              + ' ' + tieGames);  
              
  // informs player of a win
    } else if ((playSel === 'ROCK' && compSel === 'SCISSORS') ||
            (playSel === 'PAPER' && compSel === 'ROCK') ||
            (playSel === 'SCISSORS' && compSel === 'PAPER')) {

            // track playRound output - WIN
              console.log(win + replay); 
              return alert('wins: ' + ' ' + ++playerWins + ' | ' 
              + 'losses: ' + ' ' + computerWins +  ' | ' 
              + 'Tie Games:' + ' ' + tieGames); 
  
  // informs player they made a spelling mistake or unaccepted play            
    } else if ((playSel !== 'ROCK') ||
            (playSel !== 'PAPER') || 
            (playSel !== 'SCISSORS')) {
              return alert(again + replay);  
  }
  playRound(playSel, compSel);
}
  
playGame(playerWins,computerWins);
  console.log(playerWins,computerWins,tieGames);
playGame(playerWins,computerWins);
  console.log(playerWins,computerWins,tieGames);
playGame(playerWins,computerWins);
  console.log(playerWins,computerWins,tieGames);
playGame(playerWins,computerWins);
  console.log(playerWins,computerWins,tieGames);
playGame(playerWins,computerWins);
  console.log(playerWins,computerWins,tieGames);
getScore(playerWins,computerWins);










  

