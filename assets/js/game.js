let game = {

    iconsTechs: [
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
    ],

    cards: null,

    // criar cartas
    createCardsFromTemplate: function () {
        this.cards = [];

        this.iconsTechs.forEach(function (tech) {
            game.cards.push(game.createPairFromTemplate(tech));
        })

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards(); 
        return this.cards
    },

    // criar os pares
    createPairFromTemplate: function (tech) {
        return [
            {
                id: this.createIdWithTemplate(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdWithTemplate(tech),
                icon: tech,
                flipped: false,
            }]
    },

    // Cria o id da carta
    createIdWithTemplate: function (tech) {
        return tech + parseInt((Math.random() * 1000));
    },

    // embaralhar cartas
    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }

}