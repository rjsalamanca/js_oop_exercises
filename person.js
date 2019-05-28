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
        this.greeting = ''

        this.addFriend = function(friend){
            this.friends.push(friend);
        }

        this.createGreeting = function(other){
            this.greeting = 'Yo ' + other.name + '! from ' + this.name + '.';
        }

        this.greet = function(){
            console.log(this.greeting)
        };
        
        this.lazyGreet = function(){
            setTimeout(() => { this.greet() },2000);
        }

        this.createGreetingsForFriends = function(){
            let mainPerson = this;
            this.friends.map(function(friend) {
                mainPerson.createGreeting(friend)
                mainPerson.greet();
            });
        }
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

//create greeting
rj.createGreeting(eli);

//print greeting
rj.greet();
console.log('\n');

//lazy greet
// rj.lazyGreet();
// console.log('\n');

//create greeting for friends

let alfie = new Person('Alfie'); 
let anushka = new Person('Anushka'); 
let henrique = new Person('Henrique'); 

alfie.addFriend(anushka);
alfie.addFriend(henrique); 

alfie.createGreetingsForFriends(); 
