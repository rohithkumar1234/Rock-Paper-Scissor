const score = JSON.parse(localStorage.getItem('Score')) || {
    wins : 0,
    lose : 0,
    tie : 0
};;

// if (!score){
//     score = {
//         wins : 0,
//         lose : 0,
//         tie : 0
//     };
// }

// console.log();



updateScore();

function remove(){
score.wins = 0,
score.lose = 0,
score.tie = 0
localStorage.removeItem('Score');
updateScore(); 
}
function updateScore(){

    document.querySelector('.tracker').innerHTML = ` win : ${score.wins},lose : ${score.lose}, tie :${score.tie}`;
}

function computerPick(){
const randomNumber = Math.random();
let computersPick = '';
if (randomNumber >= 0 && randomNumber < 1/3 ){
    computersPick = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3 ){
    computersPick = 'paper';
} else  if (randomNumber >= 2/3 && randomNumber <=1){
    computersPick = 'scissors';
}
return computersPick;
}

document.body.addEventListener('keydown',() => {
    console.log("rohith");
});

function checker(playermove){
const computerChoice = computerPick();

let result = '';

if (playermove === 'rock'){
if (computerChoice === 'rock'){
result = 'its a tie';
} else if (computerChoice === 'paper'){
result = 'You lose';
} else if (computerChoice === 'scissors') {
result = 'you win';
}    
} else if (playermove === 'paper'){
if (computerChoice === 'rock'){
result = 'you win';
} else if (computerChoice === 'paper'){
result = 'its a tie';
} else if (computerChoice === 'scissors') {
result = 'you lose';
}

} else if (playermove === 'scissors'){
if (computerChoice === 'scissors'){
result = 'its a tie';
} else if(computerChoice === 'rock' ) {
result = 'you lose';
} else if (computerChoice === 'paper') {
result = 'you win';
}
}

if (result === 'you win'){
score.wins += 1;
} else if (result === 'you lose'){
score.lose += 1;
} else if (result === 'its a tie'){
score.tie += 1;
}

localStorage.setItem('Score',JSON.stringify(score))

updateScore();

document.querySelector('.result').innerHTML = result;

// document.querySelector('.moves').innerHTML = `you ${playermove} - computer ${computerPick}`;
document.querySelector('.moves').innerHTML = ` you:-  <img src="./images/${playermove}-emoji.png" alt="move-icon" class="player-moves">  computer :-   <img src="./images/${computerChoice}-emoji.png" alt="" class="player-moves">`;


// alert(`you picked ${playermove} and the computer picked ${computerChoice} and ${result}...
// win : ${score.wins},lose : ${score.lose}, tie :${score.tie}`);
}
