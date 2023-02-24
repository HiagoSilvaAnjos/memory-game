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

createCardsFromTemplate(iconsTechs);

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