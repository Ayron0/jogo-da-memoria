type Card = {
    id: string;
    icon: string;
    flipped: boolean;
}

let game = {

    lockMode: false,
    firstCard: null as Card |null,
    secondCard: null as Card |null,

    techs: ['bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'],

    cards : [] as Card[],

    
    setCard: function(id: string): boolean {
        let card = this.cards.filter(card=> card.id === id) [0];
        //console.log(card);
        if(card.flipped || this.lockMode) {
            return false;
        }

        if(!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function() {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(): void {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards():void {
        if (this.firstCard && this.secondCard) {
            this.firstCard.flipped = false;
            this.secondCard.flipped = false;
        }
        this.clearCards();
    },

    checkGameOver() {
        return this.cards.filter(card => !card.flipped).length == 0;
    },

    
    createCardsFromTechs :function(): Card[] {
        this.cards = [];
    
        this.techs.forEach((tech) => {// E um loop no array, um For.
            this.cards.push(...this.createPairFromTechs(tech));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards(this.cards);
        return this.cards;
    },
    
    createPairFromTechs:function (tech: string): Card[] {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        },{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }]
    },
    
    createIdWithTech: function(tech: string): string {
        return tech + Math.floor(Math.random() * 1000).toString();
    },
    
    shuffleCards: function(cards: Card[]) { // funçaõ que embaralha as cartas.
        let currentIndex = cards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];// Essa é uma maneira de inverte valores no javaScript.
        }
    },

    flipCard: function(cardId: string, gameOverCallBack: () => void, noMatchCallback: () => void){
        if(this.setCard(cardId)) {
            if(this.secondCard) {
                if(this.checkMatch()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                        //Game Over
                        gameOverCallBack();
                    }
                }else {
                    setTimeout(()=>{
                        //No Match
                        this.unflipCards();
                        noMatchCallback();
                    }, 1000)
                };
            }
            
        }
    }
}
export default game