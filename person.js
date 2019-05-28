// Person.prototype.addFriend = function(friend) { 
//      this.friends.push(friend); 
// }; 

// Person.prototype.createGreeting = function(other) { 
//      return 'Yo ' + other.name + '! from ' + this.name + '.'; 
// };

// Person.prototype.greet = function(other) {
//      console.log(this.createGreeting(other)); 
// };

class Person{
    constructor (name){
        this.name = name;
        this.friends = [];

        this.addFriend = function(friend){
            this.friends.push(friend);
        }

        this.greet = function(other){
            console.log('Yo ' + other.name + '! from ' + this.name + '.');
        }
    }


    static greet(other){
        console.log(this.createGreeting(other));
    }
}

const rj = new Person('rj');
const eli = new Person('eli');

//printing names
console.log(rj.name);
console.log(eli.name + '\n');

//adding friends
console.log(rj.friends);
rj.addFriend(eli.name);
console.log(rj.friends + '\n');

//greet
rj.greet(eli);