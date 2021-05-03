// Create a function that concatenates n input arrays, where n is variable.

// Example: firstFun([1,2,3],[5,6,7],[8,9,10]) => [1,2,3,4,5,6,7,8,9,10]

// Answer 
function firstFunc(...args) {
    let result = [];
    for (let i = 0;i < (arguments.length); i++) {
        result = result.concat(arguments[i]);
    }
    return result;
}

console.log(firstFunc([1,2,3],[4,6,7],[8,9,10]))

// ES6

function esSixFunc(...args) {
    return [].concat(...args)
}

console.log(esSixFunc([1,2,3],[4,5,6],[7,8,9]))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create a function that takes two arguments (number, length)
// secondFunc(7, 5) => [7, 14, 21, 28, 35]

function secondFunc(number, length) {
    let result = [];
    for(let i = 1; i <= length;i++) {
        result.push(number * i)
    }
    return result
}

console.log(secondFunc(7,5))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//ES6 not working

// function esSecondFunc (number, length) {
//     return [...Array[length].keys()].map((e,i) => (e + 1)* number)
    
// }

// console.log(esSecondFunc(7,5)) // not working

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Create a function that takes an array of numbers and a string, returns an array of number sorted 
// in ascending or descending order.

//fsortFunc([4,3,2,1], "Ascending") => [1,2,3,4]
//fsortFunc([1,2,3,4], "Descending") => [4,3,2,1]

//Answer

function sortFunc(arr, str) {
    switch (str) {
        case "Ascending":
            return arr.sort((a,b) => a - b); //Formula for Ascending
            break;
        case "Descending":
            return arr.sort((a,b) => b - a); //Formula for Descending
            break;
        default:
            return arr;
            break;
    }
}

console.log(sortFunc([2,5,7,3,8], "Ascending"))

// ES6 

const esSortFunc = (arr, str) =>
str === "Ascending" ? arr.sort((a,b) => a - b) : 
    str === "Descending" ? arr.sort((a,b) => b -a) :
        arr

console.log(esSortFunc([3,5,2,1,6],"Descending"))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Create a function that returns true if all params are truthy otherwise return false
// trueOrFalse(true, true, true) => true 
// trueOrFalse(true, true, 0) => false

const esSixTrueOrFalse = (...args) => args.every(Boolean)

console.log(trueOrFalse([true, true, 0]))


function trueOrFalse(...args) {
    return args.every(Boolean)
}

// not working ^^^^^^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Create a function that takes three arguments (x,y,z) and returns
//an array containing a n number of sub arrays
//each sub array contains item within

function subArrays(x,y,z) {
    return Array(x).fill(Array(y).fill(z))
}
// x = number of arrays
// y = number of subarrays in each array
// z = value of every element of the arrays
console.log(subArrays(3,2,3))
//subArrays(3,2,3) -> [[3,3],[3,3],[3,3]]

// checkSubArrays([1, 3],[1,2,3,4,5]) -> true 
// checkSubArrays([1,2,3],[6,7,8,9]) -> false


function checkArrays(arr1, arr2) {
    for(let i = 0;i < arr1.length;i++) {
        if (arr1[i] === arr2[i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(checkArrays([1,3],[6,7,8,9]))