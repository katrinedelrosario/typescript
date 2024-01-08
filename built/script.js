"use strict";
let firstName = 'katrine';
let lastName = 'del rosario';
let age = 26;
let isWideScreen = false;
let todaysDate = new Date();
let nullValue = null;
let undefinedValue = undefined;
console.log('hiii my name is ', firstName, 'and i am ', age, ' years old');
//arrays
let arrayOfFirstnames = ['firstname1', 'firstname2'];
let arrayOfAges = [23, 45, 67];
let arrayOfLastnames = ['lastname1', 'lastname2'];
let arrayOfMixedTypes = ['name1', 2, 5, undefined]; //use pipe (|) to use multiple datatypes
let nestedArray = [['name1', 'name2'], []];
//objects
let coffeeMachine = {
    max_ml: 10000,
    name: 'barista touch',
    brand: 'sage',
    make: () => {
        console.log('making coffee');
    }
};
coffeeMachine.make();
let person = {
    firstName: 'katrine',
    lastName: 'del rosario',
    age: 26,
    eyeColor: 'brown',
    hairColor: 'darkbrown',
    height: 172,
    favoritColors: ['pink', 'red', 'orange', 'yellow'] || 'sunset'
};
function verifyAge(person) {
    if (person.age >= 18) {
        return person.firstName + ' ' + person.lastName + ' is allowed';
    }
    else {
        return person.firstName + ' ' + person.lastName + ' is not allowed';
    }
}
