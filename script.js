//Declaring the different colored panels

const topRight = document.getElementById("quarterCircleTopRight");
const topLeft = document.getElementById("quarterCicleTopLeft");
const bottomRight = document.getElementById("quarterCircleBottomRight");
const bottomLeft = document.getElementById("quarterCircleBottomLeft");
const startButton = document.getElementById("startButton");

//Declaring the variables that will be used through the game

let start
let order = [];
let playerOrder = []
let success;
let currentTurn;
let playerTurn;
let fail;
let litUp;
let gameTimer;
let IntervalId;
let buttonContent = startButton.innerHTML


startButton.addEventListener("click", function () {
    startGame();
    if (buttonContent === "Start") {
        setStop();
    }
    else if (buttonContent === "Stop") {
        setStart();
    }
});

function setStop() {
    startButton.innerHTML = "Stop";
}

function setStart() {
    start.Button.innerHTML = "Start";
    clearInterval(IntervalId);
}

function startGame() {
    order = [];
    playerOrder = []
    litUp = 0;
    currentTurn = 1;
    successs = false;
    fail = false;
    playerTurn = false;

    //generates order of pattern
    for (i = 0; i < 15; i++) {
        order.push(Math.floor(Math.random() * 4 + 1));
    }

    setInterval(compTurn, 1000);
}

//When its the computer's turn and shows you the pattern to follow
function compTurn() {
    if (!playerTurn) {
        clearColor();
        setTimeout(function () {
            if (order[litUp] === 1) {
               one();
            }
            if (order[litUp] === 2) {
               two(); 
            }
            if (order[litUp] === 3) {
                three();
            }
            if (order[litUp] === 4) {
               four()
            }
            litUp++;
        }, 200)
    }
    if (currentTurn === litUp) {
        clearInterval(IntervalId);
        playerTurn = true;
    }

}

//Lights up the panels
function one() {
    topRight.classList.add("active");
}
function two(){
    topLeft.classList.add("active");
}
function three(){
    bottomLeft.classList.add("active");
}
function four(){
   bottomRight.classList.add("active");
}