console.log("BlackJaack");
let isAlive = false;
let hasBlackJack = false;
let cards = []
let sum = 0;
let messageEl = document.getElementById("messageEl");
let cardEl = document.getElementById("cardEl");
let sumEl = document.getElementById("sumEl");

function randomNumber() {
    let random = Math.floor(Math.random()*13) + 1;
    if (random>10) {
        return 10;
    }else if(random===1){
        return 11
    }else{
        return random;
    }
}

function startGame() {
    isAlive= true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "; 
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomNumber()
        sum += card
        cards.push(card)
        renderGame()        
    }
}