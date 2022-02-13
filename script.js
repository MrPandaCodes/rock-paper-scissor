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
        div.id = `s${elementId}`;
        div.className = `score ${counter}`;
        div.innerHTML = `${playerType}`;
        document.getElementById(elementId).appendChild(div);
    } else { document.getElementById(`s${elementId}`).innerHTML = `${playerType}`; }
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
}


/*
    let div = document.createElement("div");
    div.id = `score${counter}`;
    div.className = `score ${counter}`;
    
    document.getElementById("tally").appendChild(div);
    if (document.getElementById(`score${counter}`).innerHTML == "win") { winList.push("win"); }
    else if (document.getElementById(`score${counter}`).innerHTML == "lose") { loseList.push("lose"); };
    } 
    else {
      let finalScore = document.createElement("div");
    finalScore.className = "finalscore";
    document.getElementById("tally").appendChild(finalScore);
      if (winList.length > loseList.length) {
      finalScore.innerHTML = "YOU WON !!!";
    } else if (winList.length < loseList.length) { finalScore.innerHTML = "CPU WON !!!"; } 
    else { finalScore.innerHTML = "IT IS A DRAW !!!"; }
*/

/* let div = document.createElement("div");
  div.id = `score${counter}`;
  div.className = `score ${counter}`;
  div.innerHTML = `${playerType}`;
  document.getElementById(elementId).appendChild(div);
  */