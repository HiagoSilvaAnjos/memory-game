const cardFront = 'card-front';
const cardBack = 'card-back';
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

startGame()

function startGame() {
    
    cards = createCardsFromTemplate(iconsTechs);
    shuffleCards(cards);
    console.log(cards);
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

    for (let i of iconsTechs) {
        cards.push(createPairFromTemplate(i))
    }

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

function createIdWithTemplate (tech) {
   return tech + parseInt((Math.random() * 1000));
}