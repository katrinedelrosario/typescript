"use strict";
// percent calculating func
function calculatePercent(number, percent) {
    return (number * percent) / 100;
}
const result1 = calculatePercent(200, 25); // (startnumber, percent) = result (in this case 50)
//get element from array
function getSpecificElement(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    else {
        console.error(Error, 'couldnt find that element in this index');
    }
}
const arrayNumbers = [12, 34, 56, 78];
const result2 = getSpecificElement(arrayNumbers, 2); // result in this case should be 56
