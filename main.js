/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * Done: Display the guess history using displayHistory() function
 * Done: Use the initGame() function to restart the game
 */

let guesses = [];
let correctNumber = getRandomNumber()

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    getRandomNumber();
    console.log(correctNumber);
}

function playGame() {
    // @ts-ignore
    let numberGuess = document.getElementById("number-guess").value
    displayResult(numberGuess);
    saveGuessHistory(numberGuess)
    displayHistory();
}

function displayResult(numberGuess) {
    if (numberGuess < correctNumber) {
        showNumberBelow()
    } else if (numberGuess > correctNumber) {
        showNumberAbove()
    } else {
        showYouWon()
    }
}

function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}

function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
    let randomNumber = Math.random();
    let mathFloorNumber = Math.floor(randomNumber * 100) + 1;
    return mathFloorNumber;
}

function saveGuessHistory(guess) {
    guesses.push(guess);
}

function displayHistory() {
    //start at the end of the array
    // let index = guesses.length - 1;
    // let list = "<ul class='list-group'>";

    // while (index >= 0) {
    //     list += "<li class='list-group-item'>" +
    //         "You Guessed  " + guesses[index] + "</li>"
    //     index -= 1
    // }
    // list += '</ul>'
    // document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}