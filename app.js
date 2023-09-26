let player = {
    name: "Player",
    chips: 200
    // sayHello: function() {
    //     console.log("howdy!");
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // query selector is a broader selector
let cardEl = document.querySelector("#card-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": £" + player.chips

function getRandomCard() {
    let result = 0
    result += Math.floor(Math.random() * 13) + 1

    if (result === 1) {
        return 11
    } else if (result >= 10) {
        return 10
    } else {
        return result
    }
}

function startGame() {
    if (player.chips >= 10) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        let cards = [firstCard, secondCard]
        let sum = firstCard + secondCard

        // Deduct 10 chips from the player's balance
        player.chips -= 10;

        // Update the player's chips display
        playerEl.textContent = player.name + ": £" + player.chips;

        renderGame()
    } else {
        message = "You don't have enough chips to play!"
        messageEl.textContent = message;
    }
}


function renderGame() {
    cardEl.textContent = "Card: "
    // cardEl.textContent = `Cards: ${firstCard}, ${secondCard}, ${card}`
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
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
        let newCard = getRandomCard();
        cards.push(newCard)
        sum += newCard;
        renderGame()
    }
}

function resetGame() {
    cards = []
    sum = 0
    hasBlackJack = false
    isAlive = false
    message = "Want to play a round?"

    // Reset player's chips to the initial value
    player.chips = 200;

    // Update the player's chips display
    playerEl.textContent = player.name + ": £" + player.chips;

    // Clear card, sum, and message displays
    cardEl.textContent = "Card: ";
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}