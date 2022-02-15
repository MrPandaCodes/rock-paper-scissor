let player;
let counter = 0;
let playerCounter = 0;
let computerCounter = 0;
let list = [];


function computerPlay() {
    let a = ["Rock", "Paper", "Scissor"];
    let b = Math.floor(Math.random() * 100);
    if (b <= 33) {
        return a[0];
    } else if (b <= 66) {
        return a[1];
    } else {
        return a[2];
    }
}

function rockPaS(player) {

    let compu = computerPlay();
    if (player.toLowerCase() == "rock" && compu.toLowerCase() == "scissor") {
        return "win";
    } else if (player.toLowerCase() == "rock" && compu.toLowerCase() == "rock") {
        return "draw";
    } else if (player.toLowerCase() == "rock" && compu.toLowerCase() == "paper") {
        return "lose";
    } else if (player.toLowerCase() == "paper" && compu.toLowerCase() == "scissor") {
        return "lose";
    } else if (player.toLowerCase() == "paper" && compu.toLowerCase() == "paper") {
        return "draw";
    } else if (player.toLowerCase() == "paper" && compu.toLowerCase() == "rock") {
        return "win";
    } else if (player.toLowerCase() == "scissor" && compu.toLowerCase() == "scissor") {
        return "draw";
    } else if (player.toLowerCase() == "scissor" && compu.toLowerCase() == "rock") {
        return "lose";
    } else if (player.toLowerCase() == "scissor" && compu.toLowerCase() == "paper") {
        return "win";
    } else {
        return "ERROR!!!";
    };


}

function scoreLister(elementId, playerType) {

    if (counter <= 1) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        div.id = `s${elementId}`;
        div.className = `score ${counter}`;
        img.id = `s${elementId}img`;
        img.src = `img/${playerType}.webp`
        img.alt = "score";
        img.style.width = "100%";
        img.style.height = "100%";

        document.getElementById(elementId).appendChild(div)
        document.getElementById(`s${elementId}`).appendChild(img);
    } else { document.getElementById(`s${elementId}img`).src = `img/${playerType}.webp`; }
}

function gameEnd() {
    let divEndL = document.createElement("div");
    let divEndR = document.createElement("div");
    let finalScore = document.createElement("button");
    divEndL.id = "leftside";
    divEndR.id = "rightside";
    finalScore.id = "finalscore";
    divEndL.className = "endscreen";
    divEndR.className = "endscreen";
    finalScore.className = "finalscore";
    divEndL.style.height = "100%";
    divEndR.style.height = "100%";
    divEndL.style.width = "50%";
    divEndR.style.width = "50%";
    divEndL.style.left = "0";
    divEndR.style.right = "0";
    document.getElementsByTagName("body")[0].appendChild(divEndL);
    document.getElementsByTagName("body")[0].appendChild(divEndR);
    /*document.getElementsByTagName("body")[0].appendChild(finalScore);*/
    document.getElementById("leftside").style.display = "block";
    document.getElementById("rightside").style.display = "block";
}

function game(player) {
    counter += 1;

    if (playerCounter < 5 && computerCounter < 5) {
        let gameResult = rockPaS(player);
        if (gameResult == "win") {
            playerCounter += 1;
            scoreLister("player_score", playerCounter);
            scoreLister("cpu_score", computerCounter);
        } else if (gameResult == "lose") {
            computerCounter += 1;
            scoreLister("cpu_score", computerCounter);
            scoreLister("player_score", playerCounter);
        } else {
            scoreLister("cpu_score", computerCounter);
            scoreLister("player_score", playerCounter);
        };
    }
    if (playerCounter == 5 || computerCounter == 5) {
        gameEnd();
        document.getElementsByTagName("button")[0].disabled = true;
        document.getElementsByTagName("button")[1].disabled = true;
        document.getElementsByTagName("button")[2].disabled = true;
    };
}
