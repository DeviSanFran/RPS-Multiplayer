
//Creation of the DOM vairables//
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.getElementById(".result . p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function for compoputer generated choices
function getComputerChoice() {
    const choices = ["r", "p", "s",];   //array established for computer choices//
    const randomNumber  = Math.floor(Math.random() * 3);
    return choices[ramdomNumber];
}
//converts the r,  p, & s to the words//
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter=== "p") return "Paper";
        return "Scissors";
}
//function for win
function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 400);
}


//function for lose
function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost.`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 400);
}

//function for draw
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 400);
}

//function for the user choices
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userCHoice + computerChoice){
        case "rs":   //sets up cases when the user wins
        case "pr":
        case "sp":
            win(userChoice, computerChoice) 
            break; //prevents it from continuing to go
        case "rp":   //sets up cases where the user loses
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;    //prevents it from continuing
        case "rr":   //sets up cases where there is a draw
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function() {
    game("r");
    })

    paper_div.addEventListener("click", function() {
    game("p");
    })

    scissors_div.addEventListener("click", function() {
    game("s");
    })
}

main();