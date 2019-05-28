// const mom = { 
//     firstName: 'Alice', 
//     lastName: 'Wong', 
//     eyeColor: 'brown', 
//     hairColor: 'black' 
// }; 

// const daughter = { 
//     firstName: 'Ilene', 
//     hairColor: 'brown' 
// };

function Parent(firstName, lastName, eyeColor, hairColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.eyeColor = eyeColor; 
    this.hairColor = hairColor;
}

Parent.prototype.showInfo = function() {
    console.log('First Name; ', this.firstName);
    console.log('Last Name: ', this.lastName);
    console.log('Eye Color: ', this.eyeColor);
    console.log('Hair Color: ', this.hairColor);
}

function Child(firstName, lastName, eyeColor, hairColor){
    Parent.call(this, firstName, lastName, eyeColor, hairColor);
};

Child.prototype = Object.create(Parent.prototype);

const mom = new Parent('Alice','Wong','brown','black')
const daughter = new Child('Ilene', mom.lastName, mom.eyeColor, 'brown');

mom.showInfo()
daughter.showInfo();