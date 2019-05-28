class Card{
    constructor(point,suit){
        this.point = point;
        this.suit = suit;
        this.getImageURL = function(){
            return `images/${this.point}_of_${this.suit}.png`;
        };
    }
}

class Hand{
    constructor(){
        this.currentHand = [];
        this.addCard = function(singleCardObj){
            this.currentHand.push(singleCardObj);
        }
        this.getPoints = function(){
            let total = 0;

            for(let i = 0; i < this.currentHand.length; i++){
                if(this.currentHand[i].point > 10){
                    total += 10;
                }else{
                    total += this.currentHand[i].point;
                }
            }

            return total;
        }
    }
}

class Deck{
    constructor(){
        this.deck = [];

        //CREATE THE DECK
        for(let i = 1; i <14; i++){
            let suit = '';
            for(let j = 0; j < 4; j++){
                if(j == 0){
                    suit = 'hearts';
                } else if (j == 1){
                    suit = 'diamonds';
                } else if (j == 2){
                    suit = 'clubs';
                } else {
                    suit = 'spades';
                }
                this.deck.push(new Card(i,suit))
            }
        }

        this.draw = function(){
            const ourCard = this.deck.pop();
            //const ourCard = this.deck.splice([Math.floor((Math.random() * this.deck.length) + 1)],1);
            return ourCard;
        }

        this.shuffle = function(){
            let tempDeck = [];
            const originalLength = this.deck.length;
            
            while(tempDeck.length != originalLength){
                tempDeck.push(this.deck.splice([Math.floor((Math.random() * this.deck.length))],1)[0]);
            }
            this.deck = tempDeck;
        }

        this.shuffle();

        this.numCardsLeft = function(){
            console.log(this.deck.length);
        }
    }
}

const deck = new Deck();
const player = new Hand();
const dealer = new Hand();

for(let i = 0; i < 2; i++){
    player.addCard(deck.draw())
    dealer.addCard(deck.draw())
}

console.log('--- DEALT HANDS ---')
console.log(player.currentHand);
console.log(dealer.currentHand);
console.log('-------------------\n')

console.log('--- TOTAL POINTS ---')
console.log('player: ', player.getPoints());
console.log('dealer: ', dealer.getPoints()+ '\n');

if(player.getPoints() > dealer.getPoints()){
    console.log('PLAYER WINS!')
} else if (player.getPoints() == dealer.getPoints()){
    console.log('DRAW')
} else {
    console.log('DEALER WINS!')
}