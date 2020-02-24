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
// let buttonContent = startButton.innerHTML;


function flip(){
    if (document.getElementById("startButton").innerHTML === "Start") {
        document.getElementById("startButton").innerHTML = "Stop";
        startGame();
    }
    else if (document.getElementById("startButton").innerHTML === "Stop") {
        document.getElementById("startButton").innerHTML = "Start";
        clearInterval(IntervalId);
        clearColor();
    }
};


function startGame() {
    order = [];
    playerOrder = [];
    litUp = 0;
    IntervalId = 0;
    currentTurn = 1;
    successs = false;
    fail = false;
    playerTurn = false;

    //generates order of pattern
    for (i = 0; i < 15; i++) {
        order.push(Math.floor(Math.random() * 4 + 1));
    }

    setInterval(compTurn, 800);
}

//When its the computer's turn and shows you the pattern to follow
function compTurn() {
    if (!playerTurn && document.getElementById("startButton").innerHTML === "Stop") {
        clearColor();
        setTimeout(function () {
            if (order[litUp] === 1) {
                topRight.classList.add("active");
            }
            if (order[litUp] === 2) {
                topLeft.classList.add("active");
            }
            if (order[litUp] === 3) {
                bottomLeft.classList.add("active");
            }
            if (order[litUp] === 4) {
                bottomRight.classList.add("active");
            }
            litUp++;
        }, 200)
    }
    if (currentTurn === litUp) {
        clearInterval(IntervalId);
        playerTurn = true;
    }

}

function clearColor(){
if (bottomRight.classList.contains("active")){
    bottomRight.classList.remove("active")
}
if (bottomLeft.classList.contains("active")){
    bottomLeft.classList.remove("active")
}
if (topRight.classList.contains("active")){
    topRight.classList.remove("active")
}
if (topLeft.classList.contains("active")){
    topLeft.classList.remove("active")
}


}

// //Lights up the panels
// function one() {
//     topRight.classList.add("active");
// }
// function two(){
//     topLeft.classList.add("active");
// }
// function three(){
//     bottomLeft.classList.add("active");
// }
// function four(){
//    bottomRight.classList.add("active");
// }