score = {
    wins: 0,
    lose: 0,
    tie: 0,
};
let computer = '';
let result = '';
// let computer1 ='';
let autoplay = false;
let intervalId ;

// auto play
function auto(){
    if(!autoplay){
        intervalId = setInterval(function(){
            const playermove = computer_move_auto();
            game_result(playermove);
        },1000);
        autoplay = true;
        document.querySelector('.js-auto').innerHTML = 'Stop Play';
    }
    else{
        clearInterval(intervalId);
        autoplay = false;
        document.querySelector('.js-auto').innerHTML = 'Auto Play';
    }
}

// key down function
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        computer_move();
        game_result('rock');
    }
    else if(event.key === 'p'){
        computer_move();
        game_result('paper');
    }
    else if(event.key === 's'){
        computer_move();
        game_result('scissor');
    }
})
// rock addlistener
document.querySelector('.js-rock').addEventListener('click',() =>{
    computer_move();
    game_result('rock');
})

// paper addlistener
document.querySelector('.js-paper').addEventListener('click',() =>{
    computer_move();
    game_result('paper');
})

// rock addlistener
document.querySelector('.js-scissor').addEventListener('click',() =>{
    computer_move();
    game_result('rock');
})

//reset addlistener
document.querySelector('.js-reset').addEventListener('click',()=>{
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    display_score();
})

// auto addlistener
document.querySelector('.js-auto').addEventListener('click',()=>{
    auto();
})

// display score
function display_score() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Lose: ${score.lose}, Tie: ${score.tie}`;
}
function computer_move_auto() {
    random = Math.random();
    if (random >= 0 && random < 1 / 3) {
        computer = 'rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computer = 'paper'
    }
    else {
        computer = 'scissor'
    }
    return computer;
}

// display result
function display_result() {
    document.querySelector('.js-result').innerHTML = result;
}

// computer move
function computer_move() {
    random = Math.random();
    if (random >= 0 && random < 1 / 3) {
        computer = 'rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computer = 'paper'
    }
    else {
        computer = 'scissor'
    }
}

// game
function game_result(playermove) {
    if (playermove === 'rock') {
        if (computer === 'rock') {
            result = 'Tie';
            score.tie = score.tie + 1;
        }
        else if (computer === 'paper') {
            result = 'You Lose';
            score.lose = score.lose + 1;
        }
        else {
            result = 'You Win';
            score.wins = score.wins + 1;
        }
    }
    else if (playermove === 'paper') {
        if (computer === 'rock') {
            result = 'You Win';
            score.wins = score.wins + 1;
        }
        else if (computer === 'paper') {
            result = 'Tie';
            score.tie = score.tie + 1;
        }
        else {
            result = 'You Lose';
            score.lose = score.lose + 1;
        }
    }
    else if (playermove === 'scissor') {
        if (computer === 'rock') {
            result = 'You Lose';
            score.lose = score.lose + 1;
        }
        else if (computer === 'paper') {
            result = 'You Win';
            score.wins = score.wins + 1;
        }
        else {
            result = 'Tie';
            score.tie = score.tie + 1;
        }
    }

    display_result();

    document.querySelector('.js-move').innerHTML = ` You <img src="${playermove}-emoji.png"> <img src="${computer}-emoji.png"> computer`

    display_score();
}