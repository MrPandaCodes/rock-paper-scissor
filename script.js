let player;
let counter = 0;
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

function playerInput() { player = document.getElementById("playerinput").value; }

function game() {
    counter = counter + 1;
    if (counter < 6) {
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
            } else { return "wrong spelling"; };


        }
        let div = document.createElement("div");
        div.className = `score${counter}`;
        div.innerHTML = rockPaS();
        document.body.appendChild(div);

        document.getElementById("result").innerHTML = "";
    } else {
        document.getElementById("gamest").disabled = true;
        let buttonDb = document.getElementById("gamest");
        buttonDb.classList.remove("gamestarter");
        buttonDb.classList.add("disabled");
    }

}

function tally() {
    for (i = 0; i <= 5; i++) {}
}