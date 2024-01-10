import { error } from "console";

// percent calculating func
function calculatePercent(number: number, percent: number): number {

    return (
        number * percent
    )/ 100
}
const result1 = calculatePercent(200, 25) // (startnumber, percent) = result (in this case 50)
console.log('calc percent func ', 'result = ' + result1);




//get element from array func
function getSpecificElement(array: number[], index: number) {

    if (array.length === 0) {
        console.error(Error, 'array is empty😕');
        return undefined
        
    }
    if (index >= 0 && index < array.length) {
        return array[index]
    } else{
        console.error(Error, 'couldnt find that element in this index🧐');
    }
}

const arrayNumbers: number[] = [12, 34, 56, 78]
const result2 = getSpecificElement(arrayNumbers, 2) // result in this case should be 56
console.log('get elm from arr func ', 'result = ' + result2);


//search array for string func
function searchArray(array: string[], buzzword: string): string | undefined {

    if (array.length === 0) {
        console.error(Error, 'array is empty😕');
        return undefined
        
    }
    for (const element of array) {
        if (element.includes(buzzword)) {
            return element
        }
    }
    console.error( Error, `couldnt find element with the text "${buzzword}" 😵‍💫`)
    return undefined
}

const arrayText: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno']
const result3 = searchArray(arrayText, 'hi') //result should in this case be 'ghi'
console.log('search arr for str ', 'result = ' + result3);



