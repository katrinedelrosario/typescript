
let firstName: string = 'katrine' 
let lastName: string = 'del rosario'
let age: number = 26
let isWideScreen: boolean = false
let todaysDate: Date = new Date()
let nullValue: null = null
let undefinedValue: undefined = undefined

//arrays
let arrayOfFirstnames: string[] = ['firstname1', 'firstname2']
let arrayOfAges: number[] = [23, 45, 67]

let arrayOfLastnames: Array<string> = ['lastname1', 'lastname2']

let arrayOfMixedTypes: Array<string | number | undefined> = ['name1', 2, 5, undefined]  //use pipe (|) to use multiple datatypes

let nestedArray: Array<Array<string>> = [['name1', 'name2'], []]

let array

console.log('hiii my name is ', firstName, 'and i am ', age, ' years old');
