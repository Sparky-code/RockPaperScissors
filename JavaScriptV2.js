
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

// Score
  function score(playerWins, computerWins, tieGames) {
    document.getElementById('wins').innerHTML += ` ${playerWins}`
    document.getElementById('losses').innerHTML += ` ${computerWins}`
    document.getElementById('ties').innerHTML += ` ${tieGames}`
}
  
// Tracks Score + Declares Winner
  let getScore = (playerWins, computerWins) => {
  if ((playerWins === 5) && (computerWins <= 5)) {
    return document.getElementById('result').innerHTML = ('You\'ve Won!');
  } else if ((computerWins === 5) && (playerWins <= 5)) {
    return document.getElementById('result').innerHTML = ('You\'ve Lost...')
  } else if ((tieGames === 5) && (computerWins < 5) && (playerWins <= 5)) {
    return document.getElementById('result').innerHTML = ('Tie Game.')
  }
}

// Clear Game
  function clear() {    
  document.getElementById('result').innerHTML = '';
  document.getElementById('wins').innerHTML = '';
  document.getElementById('losses').innerHTML = '';
  document.getElementById('ties').innerHTML = '';
  document.getElementById('error').innerHTML = '';
  }

// Play Game  
function play() {

let playGame = (playRound) => {

// Play Options Array + Random Selector 
   rpsArray = ["MOUNTAIN", "FOREST", "MACHINE"];
   computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];

// User selects a value (MOUNTAIN, FOREST, or MACHINE)
  playSel = document.getElementById('Mountain', 'Forest', 'Machine').getAttribute('value')

// Computer play
  compSel = computerPlay; 

// Play A Round of Game  
  playRound; 
    if (playSel === compSel) {
      document.getElementById('result').innerHTML += `${playSel} vs ${compSel} - ${tie}`; 
      ++tieGames;

  // informs player of a loss
    } else if ((playSel === 'MOUNTAIN' && compSel === 'FOREST') ||
            (playSel === 'FOREST' && compSel === 'MACHINE') || 
            (playSel === 'MACHINE' && compSel === 'MOUNTAIN')) {

  // Track playRound results - LOSS
              document.getElementById('result').innerHTML += `${compSel} beats ${playSel} - ${loss}`;
              ++computerWins;
              
  // Informs player of result
    } else if ((playSel === 'MOUNTAIN' && compSel === 'MACHINE') ||
            (playSel === 'FOREST' && compSel === 'MOUNTAIN') ||
            (playSel === 'MACHINE' && compSel === 'FOREST')) {

  // Track playRound output - WIN
              document.getElementById('result').innerHTML += `${playSel} beats ${compSel} - ${win}`;
              ++playerWins;
  
  // Selection Error (from v1)            
    } else if ((playSel !== 'MOUNTAIN') ||
            (playSel !== 'FOREST') || 
            (playSel !== 'MACHINE')) {
              console.log(again)
              document.getElementById('error').innerHTML += (again);
  }
score(playerWins, computerWins, tieGames)
getScore(playerWins, computerWins)
}
playGame(playerWins,computerWins, clear(result, wins, losses, ties, error));
}

// Reset Game
  function reset() {
    playerWins = 0;
    computerWins = 0;
    tieGames = 0;
    getScore.innerHTML = '';
    wins.innerHTML = '';
    losses.innerHTML = '';
    ties.innerHTML = '';
    result.innerHTML = '';
    console.clear();
}

 










  

