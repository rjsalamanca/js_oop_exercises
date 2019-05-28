function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

Person.prototype.contactInfo = function(other) { 
    console.log(`${this.name}'s Email: ${this.email}`); 
    console.log(`${this.name}'s Phone Number: ${this.phone}`); 
};

const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4938');
const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// sonny.greet(jordan);
// jordan.greet(sonny);

// sonny.contactInfo();
// jordan.contactInfo();

class Card{
    constructor(point,suit){
        this.point = point;
        this.suit = suit;
        this.getImageURL = function(){
            return `images/${this.point}_of_${this.suit}.png`;
        };
    }
}

// const myCard = new Card(5,'diamonds');
// console.log(myCard.point);
// console.log(myCard.suit);
// console.log(myCard.getImageURL())

class Hand{
    constructor(){
        this.currentHand = [];
        this.addCard = function(singleCardObj){
            this.currentHand.push(singleCardObj);
        }
        this.getPoints = function(){
            return this.currentHand.reduce((total,curr,ind) => {
                if(ind == 1 && total.point > 10){
                    total.point = 10;
                }

                return total.point += curr.point > 10 ? 10 : curr.point;
            });
        }
    }
}

// const myHand = new Hand() 
// myHand.addCard(new Card(13, 'diamonds')) 
// myHand.addCard(new Card(13, 'spades')) 

// console.log(myHand.currentHand)
// console.log(myHand.getPoints())

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
            console.log(ourCard)
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

const myDeck = new Deck();
myDeck.draw()
myDeck.draw()
myDeck.shuffle();
myDeck.numCardsLeft();