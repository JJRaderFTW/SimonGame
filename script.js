//Declaring the different colored panels

const topRight = document.getElementById("quarterCircleTopRight");
const topLeft = document.getElementById("quarterCirlceTopLeft");
const bottomRight = document.getElementById("quarterCirlceBottomRight");
const bottomLeft = document.getElementById("quarterCirlceBottomLeft");
const startButton = document.getElementById("startButton");

//Declaring the variables that will be used through the game

let start
let order = [];
let playerOrder = []
let success;
let currentTurn;
let fail;
let flash;
let gameTimer;
let buttonContent = startButton.innerHTML


startButton.addEventListener("click", function(){
    startGame();
    if(buttonContent === "Start"){
        setStop();
    }
    else{
        setStart();
    }
});

function setStop(){
    startButton.innerHTML = "Stop";
}

function setStart(){
    start.Button.innerHTML = "Start";
}

function startGame(){
    order = [];
    playerOrder= []
    flash;
    currentTurn = 1;
    successs = false;
    fail = false;

    //generates order of pattern
    for(i=0; i<15; i++){
        order.push(Math.floor(Math.random()*4+1));
    }
    


}