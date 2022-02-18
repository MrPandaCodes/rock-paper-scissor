let player;
let counter = 0;
let playerCounter = 0;
let computerCounter = 0;
let gameStatus="playing";
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

function gameEnd(gameStatus) {
  if(gameStatus == "playing"){
    let divEndL = document.createElement("div");
    let divEndR = document.createElement("div");
    let finalScore = document.createElement("button");
    let finalScoreImg= document.createElement("img");
    divEndL.id = "leftside";
    divEndR.id = "rightside";
    finalScore.id = "finalscore";
    finalScoreImg.id = "finalscoreimg" 
    divEndL.className = "endscreen left";
    divEndR.className = "endscreen right";
    finalScore.className = "finalscore";
    finalScoreImg.className = "finalscoreimg";
    document.getElementsByTagName("body")[0].appendChild(divEndL);
    document.getElementsByTagName("body")[0].appendChild(divEndR);
    document.getElementsByTagName("body")[0].appendChild(finalScore);
    document.getElementById("finalscore").appendChild(finalScoreImg);
    document.getElementById("leftside").style.display = "block";
    document.getElementById("rightside").style.display = "block";
    document.getElementsByTagName("button")[0].disabled = true;
    document.getElementsByTagName("button")[1].disabled = true;
    document.getElementsByTagName("button")[2].disabled = true;
    finalscore.setAttribute("onclick","gameRes()");
    }
  else if ( gameStatus == "restarted"){
    document.getElementsByTagName("button")[0].disabled = true;
    document.getElementsByTagName("button")[1].disabled = true;
    document.getElementsByTagName("button")[2].disabled = true;
    document.getElementById("finalscore").className="finalscore";
    document.getElementById("finalscoreimg").className="finalscoreimg";
    document.getElementById("leftside").className = "endscreen left";
    document.getElementById("rightside").className = "endscreen right";
  };
   
}

function game(player) {
    counter += 1;
    

    if (playerCounter < 5 && computerCounter < 5) {
        let gameResult = rockPaS(player);
        if (gameResult == "win") {
            playerCounter += 1;
          scoreLister("player_score", playerCounter);
          scoreLister("cpu_score", computerCounter);
          document.getElementById("splayer_score").className="score 1 win";
          document.getElementById("scpu_score").className="score 1 lose"; 
          setTime();
          
        } else if (gameResult == "lose") {
            computerCounter += 1;
          scoreLister("cpu_score", computerCounter);
          scoreLister("player_score", playerCounter);
          document.getElementById("scpu_score").className="score 1 win";
          document.getElementById("splayer_score").className="score 1 lose";
          setTime();
                     
        } else {
          scoreLister("cpu_score", computerCounter);
          scoreLister("player_score", playerCounter);
          document.getElementById("scpu_score").className="score 1 draw";
          document.getElementById("splayer_score").className="score 1 draw";
          setTime();
            
        };
    }
    if (playerCounter == 5 || computerCounter == 5) {
        gameEnd(gameStatus);
      };
  
      if (playerCounter == 5){
       document.getElementById("finalscoreimg").src = "img/win.webp";
       document.getElementById("finalscoreimg").alt = "player win";
       
      }
      else if (computerCounter == 5){
       document.getElementById("finalscoreimg").src="img/lose.webp";
       document.getElementById("finalscoreimg").alt="computer win";
      };
   
}
function gameRes(){
  playerCounter=0;
  computerCounter=0;
  gameStatus= "restarted";
  scoreLister("player_score", playerCounter);
  scoreLister("cpu_score", computerCounter);
  document.getElementById("finalscore").className="resbut";
  document.getElementById("finalscoreimg").className="resbutimg";
  document.getElementById("leftside").className = "restartpos left";
  document.getElementById("rightside").className = "restartpos right";
  document.getElementsByTagName("button")[0].disabled = false;
  document.getElementsByTagName("button")[1].disabled = false;
  document.getElementsByTagName("button")[2].disabled = false;
 
}

function scoreClassRes() {
  document.getElementById("scpu_score").className="score 1";
  document.getElementById("splayer_score").className="score 1";
    
}
function setTime(){
  setTimeout(scoreClassRes, 1100);
}
