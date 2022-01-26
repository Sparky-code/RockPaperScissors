



let rpsArray = ["Rock", "Paper", "Scissors"];   // create a function that randomly returns rock, paper, or scissors 
let computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)]; // return random selection

let playSel = prompt('Rock, Paper, or Scissors?', '').toUpperCase();// user inputs a value (rock, paper, or scissors)
  console.log(playSel);// potentially turn input into 3 buttons

let compSel = computerPlay.toUpperCase(); // computer returns a random value from the same set + case insensitive
  console.log(compSel);

/*

let play = result1 || result2;
let result1 = (`You Win! ` + `${input1} beats ${input2}`);
let result2 = (`You Lose... ` + `${input1} beats ${input2}`);

*/

let game = (win, lose, tie, again, rock, paper, scissors) => {
    win = 'You Win!';
    lose = 'You Lose...';
    tie = 'Tie Game.';
    again = 'Please Re-enter your play';
  if (playSel === compSel) {
    return tie; 
} else if ((playSel === 'ROCK' && compSel === 'PAPER') || (playSel === 'PAPER' && compSel === 'SCISSORS') || (playSel === 'SCISSORS' && compSel === 'ROCK')) {
    return lose;
} else if ((playSel === 'ROCK' && compSel === 'SCISSORS') || (playSel === 'PAPER' && compSel === 'ROCK') || (playSel === 'SCISSORS' && compSel === 'PAPER')) {
    return win;
} else if ((playSel !== 'ROCK') || (playSel !== 'PAPER') || (playSel !== 'SCISSORS')) {
    return again;
}
    return game;
}
console.log(game())
