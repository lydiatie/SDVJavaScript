//Create a function that takes two numbers and a mathematical operator + - * / and will perform a calculation with the given numbers.
// calFunc(3,"+",4) --> 7

//Answer

function calFunc(num1, operator, num2) {
    operations = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b
    }
    return operations[operator](num1, num2);
}

console.log(calFunc(6,'+',4));
console.log(calFunc(6,'-',4));
console.log(calFunc(6,'*',4));
console.log(calFunc(6,'/',4));

//Create a function that takes an array and returns the sum of all items in the array. The item in an array can be another array.
//sumFunc([1, [2, [1]], 3]) --> 7

let arr1 = [1, [2, [1]], 3];
let arr2 = [[2, 5], 3, 7]

function sumFunc(arr) {
    return arr.flat(Infinity).reduce((a,b) => a + b);
}

console.log(sumFunc(arr1));
console.log(sumFunc(arr2));

//Create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.
//flatten([[17.2, 5, "SDV503"]]) --> [17.2, 5, "SDV503"]

// let arr3 = [[17.2, 5, "SDV503"]];

// const flatten = (arr) => {
//     const result = [];

//     arr.forEach(element => {
//         Array.isArray(element) ? result.push(...flatten(element)) : result.push(element);
//     })
// }

// console.log(flatten(arr3)) // not working

//Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
//getDepth({a: 1}) -> 1
//getDepth([1, [2, [3, [4, [5]]]]]) -> 5

let arr4 = [1, [2, [3, [4, [5 ,6 , [7]]]]]];
const getDepth = obj => {
    let level = 1
Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'object') {
        const depth = getDepth(obj[key]) + 1

        level = Math.max(depth, level)
    }
})
return level;
}

console.log(getDepth(arr4));

// Create a function that can next a flat array to represent an incremental depth level sequence.
// The elements do not matter to the function, you should increment by index.
// Expect the array length to be from 2-20.

// createDepth([1, 2]) --> [1, [2]]
// createDepth([1, 2, 3]) --> [1, [2, [3]]]


let arr5 = [1, 2, 3];
function createDepth(arr) {
    if(arr.length === 1) return arr
    return [arr[0], createDepth(arr.slice(1))]
}

const esSixDepth = arr => arr.length === 1 ? arr : [arr[0], createDepth(arr.slice(1))]; // es6 

console.log(createDepth(arr5))

console.log(esSixDepth(arr5))

/* Create a function that takes an array. This array can have all kinds of items, even other arrays. 
The function should return a sing, flat, one-dimensional, array with all elements. Here are the conditions.

If the item is an Array, include each item in it and the following still apply.
If the item is a function, include the function's output, not the function itself.
If the item is a plain object or a primitive, include it as is

flatArray([1, "2", [3, function () { return 4; }, ["five"], "six", true, { prop: "val" }]])
output --> [ 1, '2', 3, 4, 'five', 'six', true, { prop: 'val' }]
*/

let arr6 = [1, "2", [3, function () { return 4; }, ["five"], "six", true, { prop: "val" }]]
function flatArray(arr) {
    let result = [];
    if (arr === undefined) {
        return arr
    }

    arr.forEach(function (e) {
        if (Array.isArray(e)) {
            result = result.concat(flatArray(e))
        } else {
            if (typeof e === 'function') {
                result.push(e())
            } else {
                result.push(e)
            }
        }
    }) 
    
    return result;
}

console.log(flatArray(arr6))
