// Messages
  win = 'You Win!';
  loss = 'You Lose...';
  tie = 'Tie Game.';
  again = 'Try Again.';
  replay = ' Play Again?';

// Get buttons
const start = document.getElementById('play');
  // get About button (hamburger menu icon)
const about = document.getElementByID('about');
  // get Reset button (recycle icon)
const reset = document.getElementByID('reset'); 
  // get Play Card buttons
    // Mountain
    // Forest
    // Machine

// Link game
// Score
  const wins = document.getElementById('wins');
  const losses = document.getElementById('losses');
  const ties = document.getElementById('ties');

  let playerWins = 0;
  let computerWins = 0;
  let tieGames = 0;

// Play generation
  playsArray = ['Mountain', 'Forest', 'Machine'];
  playGen = playsArray[Math.floor(Math.random() * playsArray.length)];

  playInput = () => {

  }

// Computer play
  let computerPlay = playGen
      console.log(computerPlay);

// User Play
  let userPlay = playInput
      console.log(userPlay)

function playGame() {

}

start.addEventListener('click', playGame);


// Gameplay 
playRound; 
if (playSel === compSel) {
  console.log(tie + replay);
  return alert('wins: ' + ' ' + playerWins + ' | ' 
  + 'losses: ' + ' ' + computerWins +  ' | ' 
  + 'Tie Games:' + ' ' + ++tieGames);

// informs player of a loss
} else if ((playSel === 'Mountain' && compSel === 'Forest') ||
        (playSel === 'Forest' && compSel === 'Machine') || 
        (playSel === 'Machine' && compSel === 'Mountain')) {

//track playRound output - LOSS
          console.log(loss + replay); 
          return alert('losses: ' + ' ' + ++computerWins + ' | ' 
          + 'wins:' + ' ' + playerWins + ' | ' + 'Tie Games:' 
          + ' ' + tieGames);  
          
// informs player of a win
} else if ((playSel === 'Mountain' && compSel === 'Machine') ||
        (playSel === 'Forest' && compSel === 'Mountain') ||
        (playSel === 'Machine' && compSel === 'Forest')) {

// track playRound output - WIN
          console.log(win + replay); 
          return alert('wins: ' + ' ' + ++playerWins + ' | ' 
          + 'losses: ' + ' ' + computerWins +  ' | ' 
          + 'Tie Games:' + ' ' + tieGames); 
}
playRound(playSel, compSel);
