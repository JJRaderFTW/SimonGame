//Declaring the different colored panels
const topRight = document.getElementById("quarterCircleTopRight");
const topLeft = document.getElementById("quarterCicleTopLeft");
const bottomRight = document.getElementById("quarterCircleBottomRight");
const bottomLeft = document.getElementById("quarterCircleBottomLeft");
const startButton = document.getElementById("startButton");

//Declaring the variables that will be used through the game
let start
let win;
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

//Turn Start switch on and off
function flip() {
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

//Begin the game
function startGame() {
    order = [];
    playerOrder = [];
    litUp = 0;
    IntervalId = 0;
    currentTurn = 1;
    successs = true;
    fail = false;
    win = false;

    //generates order of pattern
    for (i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4 + 1));
    }
    playerTurn = false;

    setInterval(compTurn, 800);
}

//When its the computer's turn and shows you the pattern to follow
function compTurn() {
    if (!playerTurn && document.getElementById("startButton").innerHTML === "Stop") {
        clearColor();
        setTimeout(function () {
            if (order[litUp] === 1) {
                topRight.classList.add("active");
                topRight.style.backgroundColor = "white"
            }
            if (order[litUp] === 2) {
                topLeft.classList.add("active");
                topLeft.style.backgroundColor = "white"
            }
            if (order[litUp] === 3) {
                bottomLeft.classList.add("active");
                bottomLeft.style.backgroundColor = "white"
            }
            if (order[litUp] === 4) {
                bottomRight.classList.add("active");
                bottomRight.style.backgroundColor = "white";
            }
        }, 200)
        litUp++;
    }
    if (currentTurn === litUp) {
        clearInterval(IntervalId);
        playerTurn = true;
        clearColor();
    }





}

topRight.addEventListener("click", function () {
    if (playerTurn) {
        playerOrder.push(1);
        check();
        topRight.style.backgroundColor = "white"
        topRight.classList.add("active");
        if (!win) {
            setTimeout(function () {
                clearColor();
            }, 300)
        }
    }
})

topLeft.addEventListener("click", function () {
    if (playerTurn) {
        playerOrder.push(2);
        check();
        topLeft.style.backgroundColor = "white"
        topLeft.classList.add("active");
        if (!win) {
            setTimeout(function () {
                clearColor();
            }, 300)
        }
    }
})
bottomLeft.addEventListener("click", function () {
    if (playerTurn) {
        playerOrder.push(3);
        check();
        bottomLeft.style.backgroundColor = "white"
        bottomLeft.classList.add("active");
        if (!win) {
            setTimeout(function () {
                clearColor();
            }, 300)
        }
    }
})

bottomRight.addEventListener("click", function () {
    if (playerTurn) {
        playerOrder.push(4);
        check();
        bottomRight.style.backgroundColor = "white"
        bottomRight.classList.add("active");
        if (!win) {
            setTimeout(function () {
                clearColor();
            }, 300)
        }
    }
})

//removes the active class and white color from the computer's turn
function clearColor() {
    if (bottomRight.classList.contains("active")) {
        bottomRight.classList.remove("active")
        bottomRight.style.backgroundColor = "blue";
    }
    if (bottomLeft.classList.contains("active")) {
        bottomLeft.classList.remove("active")
        bottomLeft.style.backgroundColor = "yellow"
    }
    if (topRight.classList.contains("active")) {
        topRight.classList.remove("active")
        topRight.style.backgroundColor = "red"
    }
    if (topLeft.classList.contains("active")) {
        topLeft.classList.remove("active")
        topLeft.style.backgroundColor = "green"
    }
}

function check() {
    //gets soemthing wrong
    if (playerOrder[playerOrder.length - 1] != order[order.length - 1]) {
        console.log(fail);
        fail = true;
        console.log(fail);
    }

    //Gets something correct
    if (currentTurn === playerOrder.length && fail === false) {
        console.log(fail);

        currentTurn++;
        playerOrder = []
        litUp = 0;
        playerTurn = false;
        IntervalId = setInterval(compTurn, 800);
        console.log("Yes")
    }

    //Wins the game
    if (playerOrder.length === 20 && !fail) {
        alert("You Win");
    }

    //Fail the game
    if (fail === true) {
        console.log("NO")
        setTimeout(() => {
            clearColor();
        }, 800)
        startGame();
    }

}