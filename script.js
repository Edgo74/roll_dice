
let player1 = {};
let player2 = {};
let currentPlayer = "";
let red_button = document.querySelector(".red-button");
let red_button2 = document.querySelector(".red-button2");
let newgame = document.querySelector(".new-game")
let dice = document.querySelector(".dice")
let hodl_btn = document.querySelector(".hodl")
dice.disabled = true;
hodl_btn.disabled = true;

function initGame() {
    player1.name = "joueur 1"
    player2.name = "joueur 2"
    player1.roundScore = 0;
    player1.globalScore = 0;
    player2.roundScore = 0;
    player2.globalScore = 0;
    currentPlayer = player1;
    updateScorePlayer1();
    updateScorePlayer2();

    dice.disabled = false;
    hodl_btn.disabled = false;
 }

 function updateScorePlayer1() {
    document.getElementById('roundScoreDisplay1').innerText = currentPlayer.roundScore;
    document.getElementById('globalScoreDisplay1').innerText = currentPlayer.globalScore;
    checkGameOver()
  }
 
 function updateScorePlayer2() {
    document.getElementById('roundScoreDisplay2').innerText = currentPlayer.roundScore;
    document.getElementById('globalScoreDisplay2').innerText = currentPlayer.globalScore;
    checkGameOver()
  }

 function rollDice() {
        let diceRoll = Math.floor(Math.random() *6 ) + 1;
        currentPlayer.roundScore += diceRoll;
        if(diceRoll === 1){
            currentPlayer.roundScore = 0;
            if(currentPlayer === player1){
                updateScorePlayer1();
            }else{
                updateScorePlayer2();
            }
            hodl();
        }else if(currentPlayer === player1){
            updateScorePlayer1();
        }else{
            updateScorePlayer2();
        }

    }

 function hodl() {
    handlePlayerTurn()
    if(currentPlayer === player1){
            hodl_score1 = document.getElementById("roundScoreDisplay1").innerText
            currentPlayer.globalScore +=  parseInt(hodl_score1);
            currentPlayer.roundScore = 0
            updateScorePlayer1();
            currentPlayer = player2;
    }else{
            hodl_score2 = document.getElementById("roundScoreDisplay2").innerText
            currentPlayer.globalScore += parseInt(hodl_score2);
            currentPlayer.roundScore = 0
            updateScorePlayer2();
            currentPlayer = player1;
    }
}



function handlePlayerTurn() {
    if(currentPlayer === player1){
        red_button.classList.toggle("d-none");
        red_button2.classList.toggle("d-none");
    }else{
        red_button2.classList.toggle("d-none");
        red_button.classList.toggle("d-none");
    }

 }

function checkGameOver() {
    let winner;
    if (player1.globalScore >= 100) {
        winner = player1;
    } else if (player2.globalScore >= 100) {
        winner = player2;
    }
    if (winner) {
        initGame();
        alert(`Le ${winner.name} a gagné !`);
    } else {
        return false;
    }
 }


newgame.addEventListener("click", function(){
    initGame() 
});
 
dice.addEventListener("click", function(){
    rollDice()
} );

hodl_btn.addEventListener("click", function(){
   hodl();
} )



 
