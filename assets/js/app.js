const cardFront = 'card-front';
const cardBack = 'card-back';
const classCard = 'card';
const iconCard = 'icon';
let iconsTechs = [
    'bootstrap',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquary',
    'mongo',
    'node',
    'react',
    'css',
];

let cards = null;

startGame();

function startGame() {
    cards = createCardsFromTemplate(iconsTechs);
    shuffleCards(cards);
    initializeCards(cards);
}

// Inicializar cartas
function initializeCards(cards) {
    let gameBoard = document.querySelector('.board-container');

    cards.forEach((card) => {
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

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

// criar cartas
function createCardsFromTemplate (iconsTechs) {
    let cards = [];

    iconsTechs.forEach(function (tech) {
        cards.push(createPairFromTemplate(tech))
    })

    return cards.flatMap(pair => pair)
}

// criar os pares
function createPairFromTemplate (tech) {
    return [
    {
        id: createIdWithTemplate(tech),
        icon: tech,
        flipped: false,
    }, 
    {   
        id: createIdWithTemplate(tech),
        icon: tech,
        flipped: false,
    }]
}   

// Cria o id da carta
function createIdWithTemplate (tech) {
   return tech + parseInt((Math.random() * 1000));
}

// virar carta
function flipCard() {
    this.classList.add("flip");
}
