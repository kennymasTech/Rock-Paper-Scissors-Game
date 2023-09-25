console.log("Hello World");

const choices = document.querySelectorAll(".choices");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreBoard = {Kennymas: 0, Computer: 0};

const play = (event) => {
    // console.log(event.target.id);

    restart.style.display = "inline-block";
    const KennymasChoice = event.target.id;

    const computerChoices = getComputerChoices();
    const winner = getWinner(KennymasChoice, computerChoices);
    showWinner(winner, computerChoices);

    // console.log(getWinner);
    console.log(KennymasChoice, computerChoices);
};

const getComputerChoices = () => {
    const rand = Math.random();
    if(rand < 0.34) {
        return "rock" 
    } else if (rand <= 0.67) {
        return "paper"
    } else {
        return "scissors"
    }
}
const getWinner = (p, c) => {
    if (p === c) {
        return "draw"
    } else if (p === "rock") {
        if (c === "paper") {
            return "Computer";
        } else {
            return "Kennymas";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "Computer";
        } else {
            return "Kennymas";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "Computer";
        } else {
            return "Kennymas";
        };
    };
};

const showWinner = (winner, computerChoices) => {
    if (winner === "Kennymas") {
        // increase by score
    scoreBoard.Kennymas++

    // show modal result
    result.innerHTML = `
    <h1 class = "text-win"> Kennymas Win </h1>
    <i id="rock" class="choices fas fa-hand-${computerChoices} fa-10x"></i>
    <p> computer choose <strong>${computerChoices.charAt(0).toUpperCase()+computerChoices.slice(1)}</strong></p>`
    } else if (winner === "computer") {
        // increase by score

        scoreBoard.Computer++

        // show modal result

        result.innerHTML = `
        <h1 class = "text-win"> Computer Wins </h1>
        <i id="rock" class="choices fas fa-hand-${computerChoices} fa-10x"></i>
        <p> computer choose <strong>${computerChoices.charAt(0).toUpperCase()+computerChoices.slice(1)}</strong></p>`
    } else {
        result.innerHTML = `
        <h1> It is a Draw </h1>
        <i id="rock" class="choice fas fa-hand-${computerChoices} fa-10x"></i>
        <p> computer choose <strong>${computerChoices.charAt(0).toUpperCase()+computerChoices.slice(1)}</strong></p>`
    };

    score.innerHTML = `
    <p> Kennymas: ${scoreBoard.Kennymas}</p>
    <p> computer: ${scoreBoard.Computer}</p>`

    modal.style.display = "block"
    }


    const restartGame = () => {
        scoreBoard.Kennymas = 0;
        scoreBoard.Computer = 0;
        score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>`
    }

    const clearModal = (event) => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
        

// Add eventListener 
choices.forEach(choices => choices.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);