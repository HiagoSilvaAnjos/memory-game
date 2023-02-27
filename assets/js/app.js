const cardFront = 'card-front';
const cardBack = 'card-back';
const classCard = 'card';
const iconCard = 'icon';

startGame();

function startGame() {
    initializeCards(game.createCardsFromTemplate());
}

// Inicializar cartas
function initializeCards() {
    let gameBoard = document.querySelector('.board-container');
    game.cards.forEach((card) => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(classCard);
        cardElement.dataset.icon = card.icon;  
        
        createCardContent(card, cardElement);
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })
}

// criar conteudo das cartas
function createCardContent(card, cardElement) {
    
    createCardFace(cardFront, card, cardElement);
    createCardFace(cardBack, card, cardElement);

}

function createCardFace (face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if (face === cardFront) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(iconCard);
        iconElement.src = `./assets/images/${card.icon}.png`

        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '<p>&lt&#47&gt</p>';
    }
    element.appendChild(cardElementFace);
}

// virar carta
function flipCard() {
    this.classList.add("flip");
}
