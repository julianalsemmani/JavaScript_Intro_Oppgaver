//import './styles.css';

// TODO: Bruk getElementById til å hente HTML-elementene med #id
let guessOutput = document.getElementById("guess");
let numbersOutput = document.getElementById("numbers")

// TODO: Bruk querySelector til å hente knappen
let button = document.querySelector("button");

// TODO: Lag en liste med tallene som skal sorteres
let numbers = [1, 500, 343, 928, 234, 29, 53, 843, 432, 647];

const sortFromSmallToBig = () => {
    return numbers.sort((a, b) => a - b);
}
// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const showNumbers = () => {
    for (let i = 0; i < numbers.length; i++) {
        let newElement = document.createElement("li");
        newElement.style.listStyle = "none";
        newElement.innerHTML = numbers[i];
        numbersOutput.appendChild(newElement);
    }
}
showNumbers();
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const showGuess = () => {
    for (let i = 0; i < numbers.length; i++) {
        let newElement = document.createElement("input");
        newElement.setAttribute("type", "number");
        newElement.setAttribute("id", "input" + i);
        guessOutput.appendChild(newElement);
    }
}
showGuess();
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const getGuess = () => {
    let guess = [];
    for (let i = 0; i < numbers.length; i++) {
        let input = document.getElementById("input" + i);
        guess.push(input.value);
    }
    return guess;
}

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkGuess = () => {
    let guess = getGuess();
    let sortedNumbers = sortFromSmallToBig();
    for (let i = 0; i < sortedNumbers.length; i++) {
        if (guess[i] != sortedNumbers[i]) {
            return false;
        }
    }
    return true;
}
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
const showUI = () => {
    showNumbers();
    showGuess();
}
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
button.addEventListener("click", () => {
    if (checkGuess()) {
        alert("You guessed right!");
    } else {
        alert("You guessed wrong!");
    }
});
