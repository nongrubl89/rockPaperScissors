let playerWin = 0;
let computerWin = 0;
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let winner = document.getElementById('whoWon');
let compScore = document.getElementById('compScore');
let playerScore = document.getElementById('playerScore')

rock.addEventListener('click', function(){
  playRound('rock')
});

scissors.addEventListener('click', function(){
  playRound('scissors')
});

paper.addEventListener('click', function(){
  playRound('paper')
});


function playRound(playerSelection){
  const option = ['rock', 'paper', 'scissors'];
  let computerSelection= option[Math.floor(Math.random()*3)];
    if(computerSelection==='scissors'&& playerSelection==='rock'){
        whoWon.innerHTML='You win, rock beats scissors';
        playerWin++;
        compScore.innerHTML='Computer: ' + computerWin;
        playerScore.innerHTML= 'Player: '+playerWin;
    } else if (computerSelection === 'scissors'&& playerSelection==='paper'){
        whoWon.innerHTML='You lose, scissors beats paper';
        computerWin++;
        compScore.innerHTML='Computer: ' + computerWin;
        playerScore.innerHTML= 'Player: '+playerWin;
    }else if(computerSelection==='rock'&&playerSelection==='scissors'){
      whoWon.innerHTML="You lose, rock beats scissors";
      computerWin++;
      compScore.innerHTML='Computer: ' + computerWin;
      playerScore.innerHTML= 'Player: '+playerWin;
    }else if(computerSelection==='rock'&&playerSelection==='paper'){
       whoWon.innerHTML="You win, paper beats rock.";
       playerWin++
       compScore.innerHTML='Computer: ' + computerWin;
       playerScore.innerHTML= 'Player: '+playerWin;
    }else if(computerSelection==='paper'&&playerSelection==='scissors'){
        whoWon.innerHTML='You win, scissors beats paper.';
        playerWin++;
        compScore.innerHTML='Computer: ' + computerWin;
        playerScore.innerHTML= 'Player: '+playerWin;
    }else if(computerSelection==='paper'&&playerSelection==='rock'){
        whoWon.innerHTML='You lose, paper beats rock';
        computerWin++
        compScore.innerHTML='Computer: ' + computerWin;
        playerScore.innerHTML= 'Player: '+playerWin;
    }else if(computerSelection===playerSelection){
        whoWon.innerHTML="It's a tie, play again";
        compScore.innerHTML='Computer: ' + computerWin;
        playerScore.innerHTML= 'Player: '+playerWin;
    } else {
        return 'Something is wrong';
    }
}

// function game(){
// for(i=0;i<5;i++){
// const playerSelection = playerPlay();
// const computerSelection = computerPlay();
// (playRound(computerSelection, playerSelection));
// console.log(playerWin);
// console.log(computerWin);}
// if(computerWin>playerWin){
//   console.log('The computer won this game.');
// } else if (computerWin<playerWin){
//   console.log('You won this game!');
// } else if(computerWin===playerWin){
//   console.log('Tie game!');
// }
// }

// game();




