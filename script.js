    let score = {
        win: 0,
        lost: 0,
        tie: 0,
    };

function ComputerChoice(userInput) {
    let randomNumber = Math.random();
    let ComputersChoice;
    if (randomNumber < 0.33) {
        ComputersChoice = "Rock";
    } else if (randomNumber < 0.66) {
        ComputersChoice = "Scissors";
    } else {
        ComputersChoice = "Paper";
    }

    let result;


    if (userInput == "Rock") {
        if (ComputersChoice === "Rock") {
            result = "Its a Tie";
            score.tie++;
        } else if (ComputersChoice === "Paper") {
            result = "Computer Wins";
            score.lost++;
        } else if (ComputersChoice === "Scissors") {
            result = "You Won";
            score.win++;
        }
    }
    if (userInput == "Scissors") {
        if (ComputersChoice === "Scissors") {
            result = "Its a Tie";
            score.tie++;
        } else if (ComputersChoice === "Rock") {
            result = "Computer Wins";
            score.lost++;
        } else if (ComputersChoice === "Paper") {
            result = "You Won";
            score.win++;
        }
    }
    if (userInput == "Paper") {
        if (ComputersChoice === "Rock") {
            result = "You Won";
            score.win++;
        } else if (ComputersChoice === "Scissors") {
            result = "Computer Wins";
            score.lost++;
        } else if (ComputersChoice === "Paper") {
            result = "Its a Tie";
            score.tie++;
        }
    }
    // alert(`You have Choosen ${userInput} . The computer has choosen  ${ComputersChoice} . 

    // ${result} 

    // Won : ${score.win}  Lost : ${score.lost}  Tie : ${score.tie} `);


    document.querySelector('.yourChoice').textContent = `You Choosed : ${userInput}`;
    document.querySelector('.computerChoice').textContent = `Computer Choosed : ${ComputersChoice}`;

    document.querySelector('.box').textContent = `Result  : ${result}`;

    document.querySelector('.win').textContent = `Win : ${score.win}`;
    document.querySelector('.lost').textContent = `Lost : ${score.lost}`;
    document.querySelector('.tie').textContent = `Tie : ${score.tie}`;
}
function reset(){
    location.reload();
}