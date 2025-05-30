let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses: 0,
    ties: 0
};
let isAutoPlaying = false;
let intervalId;
updateScore()

function autoplay(){
    if(!isAutoPlaying){
        intervalId = setInterval(() => {
            const playerspick = computerspick();
            playersmove(playerspick);
           }, 1000);
           isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying= false;
    }
 
        
       const buttonAutoplay = document.querySelector('.js-autoplay');
    //    console.log(buttonAutoplay.innerText);
       if (buttonAutoplay.innerText === 'Auto play'){
        buttonAutoplay.innerHTML = 'Stop play';
       }else if (buttonAutoplay.innerText === 'Stop play'){
         buttonAutoplay.innerHTML = 'Auto play';
       }

}

function playersmove(playerspick) {
    let result = '';
    const computersmove = computerspick(); //  part a
    if (playerspick === 'rock') {
        if (computersmove === 'rock') {
            result = 'It is a tie.';
        } else if (computersmove === 'paper') {
            result = 'You lose.';
        } else if (computersmove === 'scissors') {
            result = 'You win!';
        }
    } else if (playerspick === 'paper') {
        if (computersmove === 'paper') {
            result = 'It is a tie.';
        } else if (computersmove === 'scissors') {
            result = 'You lose.';
        } else if (computersmove === 'rock') {
            result = 'You win!';
        }
    } else if (playerspick === 'scissors') {
        if (computersmove === 'scissors') {
            result = 'It is a tie.';
        } else if (computersmove === 'rock') {
            result = 'You lose.';
        } else if (computersmove === 'paper') {
            result = 'You win!';
        }
    }

  

    if (result ==='You win!' ){
        score.wins=  score.wins + 1;
    }else if(result === 'You lose.'){
        score.losses=  score.losses +1;
    }else if(result === 'It is a tie.'){
        score.ties= score.ties + 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    console.log(score);

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =`You picked <img src="${playerspick}.png" class="rock-image">, and the computer picked <img src="${computersmove}.png" class="rock-image">.` ;
    updateScore();
    
}

function updateScore() {
    document.querySelector('.js-scoresheet').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function computerspick() {
    let randomNumber = Math.random();
    let computersmove = ' ';// part b
    if (randomNumber < 1 / 3) {
        computersmove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computersmove = 'scissors';
    } else {
        computersmove = 'paper';
    }
    return computersmove;// part c
    /* this code can work without part a part b and part c because when you dont declare a variable using let var or const in a function like i did in part b js automatically assumes it as a global variable which can be used in all variables thus the code worked but this isnt good practice that is why we did  part c and part a but instead of all this what we could have done is we would have done part b out all function and in the first line of script which would have made it a global variable
    :) */
}

document.querySelector('.Rock').addEventListener('click', () => {playersmove('rock')})
document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){playersmove('rock')}
    else if(event.key === 'p'){playersmove('paper')}
    else if(event.key === 's'){playersmove('scissors')}
    
})

document.querySelector('.paper').addEventListener('click', () => {playersmove('paper')})

document.querySelector('.scissors').addEventListener('click', () => {playersmove('scissors')})

document.querySelector('.reset-score').addEventListener('click', ()=> { score.wins= 0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScore()});
document.querySelector('.autoplay').addEventListener('click', ()=> {autoplay(); } );


