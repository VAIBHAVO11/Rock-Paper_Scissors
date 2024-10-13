let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#020114";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "Green";
    }else{ 
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${userChoice} beats your ${comChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userChoice) => {
    // Computer Choice
    const comChoice = genCompChoice();

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor , paper
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // rock, scissor
            userWin = comChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});