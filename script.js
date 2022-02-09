let player;
let counter = -1;
let loseList = [];
let winList = [];
let list = [];
document.getElementById("gamest").disabled = true;
let buttonDb = document.getElementById("gamest");
buttonDb.classList.remove("gamestarter");
buttonDb.classList.add("disabled");

function inputChecker() {
    if (document.getElementById("playerinput").value !== undefined) {
        document.getElementById("gamest").disabled = false;
        buttonDb.classList.remove("disabled");
        buttonDb.classList.add("gamestarter");
    } else {}
}

function rockPaS() {
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
        return "wrong spelling";
    };


}

function playerInput() { player = document.getElementById("playerinput").value; }

function game() {
    counter = counter + 1;
    if (counter < 5) {

        let div = document.createElement("div");
        div.id = `score${counter}`;
        div.className = `score ${counter}`;
        div.innerHTML = rockPaS();
        document.body.appendChild(div);
        console.log(`score${counter}`);
        console.log(document.getElementById(`score${counter}`).innerHTML);
        if (document.getElementById(`score${counter}`).innerHTML == "win") { winList.push("win"); } else if (document.getElementById(`score${counter}`).innerHTML == "lose") { loseList.push("lose"); };

        console.log(winList);
        console.log(winList.length);
        console.log(loseList);
        console.log(loseList.length);

    } else {

        let finalScore = document.createElement("div");
        finalScore.className = "finalscore";
        document.body.appendChild(finalScore);

        if (winList.length > loseList.length) {
            finalScore.innerHTML = "YOU WON !!!";
        } else if (winList.length < loseList.length) { finalScore.innerHTML = "CPU WON !!!"; } else { finalScore.innerHTML = "IT IS A DRAW !!!"; }

        document.getElementById("gamest").disabled = true;
        let buttonDb = document.getElementById("gamest");
        buttonDb.classList.remove("gamestarter");
        buttonDb.classList.add("disabled");
    }

}