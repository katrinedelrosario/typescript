
let firstName: string = 'katrine' 
let lastName: string = 'del rosario'
let age: number = 26
let isWideScreen: boolean = false
let todaysDate: Date = new Date()
let nullValue: null = null
let undefinedValue: undefined = undefined
console.log('hiii my name is ', firstName, 'and i am ', age, ' years old');

//arrays
let arrayOfFirstnames: string[] = ['firstname1', 'firstname2']
let arrayOfAges: number[] = [23, 45, 67]

let arrayOfLastnames: Array<string> = ['lastname1', 'lastname2']

let arrayOfMixedTypes: Array<string | number | undefined> = ['name1', 2, 5, undefined]  //use pipe (|) to use multiple datatypes

let nestedArray: Array<Array<string>> = [['name1', 'name2'], []]


//objects
let coffeeMachine = {
    max_ml: 10000,
    name: 'barista touch',
    brand: 'sage',
    make: () => {
        console.log('making coffee');
    }
}
coffeeMachine.make()


let person = {
    firstName: 'katrine',
    lastName: 'del rosario',
    age: 26,
    eyeColor: 'brown',
    hairColor: 'darkbrown',
    height: 172,
    favoritColors: ['pink', 'red', 'orange', 'yellow'] || 'sunset'
}


//functions
function verifyAge(person: {firstName: string, lastName: string, age: number}) {
    if (person.age >= 18) {
        return person.firstName + ' ' + person.lastName + ' is allowed'
    } else {
        return person.firstName + ' ' + person.lastName + ' is not allowed'
    }
}
    

