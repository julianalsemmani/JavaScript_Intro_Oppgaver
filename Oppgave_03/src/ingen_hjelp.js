//import './styles.css';

// TODO: Sett startverdien for de ulike tellerene du trenger for å ha kontroll på
// - antall feil
let wrongGuesses = 0;
// - posisjonen til bokstaven du skal skrive
let position = 0;
// - ordet som skal vises
let word = "";

// TODO: Lag en liste med ulike ord
let wordList = ["Car", "safety", "systems", "have", "come", "a", "long", "way", "but", "he", "was", "out", "to", "prove", "they", "could", "be", "outsmarted"];

// TODO: Hent ut HTML #id og knappen
let wordOuput = document.getElementById("word");
let letterOutput = document.getElementById("letter");
let guessOutput = document.getElementById("wrongs");
let button = document.querySelector("button");

const getRandomWord = () => {
    let randomWord = wordList.pop(wordList[Math.floor(Math.random() * wordList.length)]);
    return randomWord;
}

// TODO: Lag en funksjon for å skrive ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
const showWord = () => {
    if (wordList.length > 0) {
        word = getRandomWord().toLowerCase();
        wordOuput.innerHTML = `Word: ${word}`;	
        letterOutput.innerHTML = `Current letter: ${word[position]}`;;
    } else {
        wordOuput.innerHTML = "No more words";
    }
}
// TODO: Lag en funksjon som gjør at vi kan bytte ord. Må også oppdatere tellerene
const changeWord = () => {
    wrongGuesses = 0;
    position = 0;
    showWord();
}
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkLetter = (e) => {
    if (e.key === word[position]) {
        position++;
        letterOutput.innerHTML = `Current letter: ${word[position]}`;
    } else {
        wrongGuesses++;
        guessOutput.innerHTML = `Total wrong guesses: ${wrongGuesses}`;
    }
}
// TODO: Lag en funksjon for å sjekke om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const checkPosition = () => {
    if (position === word.length) {
        changeWord();
    }
}
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
const handleKey = (e) => {
    checkLetter(e);
    checkPosition();
}
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet
const updateUI = () => {
    showWord();
    guessOutput.innerHTML = `Total wrong guesses: ${wrongGuesses}`;
    wordOuput.innerHTML = `Word: ${word}`;
    letterOutput.innerHTML = `Current letter: ${word[position]}`;
}
// - Vise antall feil
// - Vise ordet vi skal skrive
// - Vise hvor langt vi har kommet (posisjonen) på det ordet vi skal skrive
// TODO: Lytt til keyup på window
window.addEventListener("keyup", handleKey);
// TODO: Lytt til klikk på knappen. Klikket skal gjøre knappen "disabled" samt starte oppgaven
button.addEventListener("click", () => {
    button.disabled = true;
    updateUI();
});