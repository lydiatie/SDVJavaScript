// two arguments, return the two arguments in an array.

// function newArr(a, b) {
//     let arrOne = [a, b];
//     return arrOne;
// }

// console.log(newArr(1,'Lydia'))

// let newArr = (a,b) => [a,b];

// let newArr = (... a) => a
// console.log(typeof newArr)
// console.log(newArr(1, 'Lydia', 3, 4, 5, 6, 7));

// let arrTwo = ['Lydia', 4, 5, 6, 7, 8, 9, 10, 11]
// console.log(arrTwo[5]) //output 8 (the 5th sequence in the array is 8)
// console.log(arrTwo[7], arrTwo[8])

// arr = [2, 6]

// function oddOrEven(x) {
//     let sum = 0;
//     x.forEach(num => sum += num); //for loop es6
//     return sum%3 === 0 ? 'even' : 'odd' // if else statement es6
// }


//for loop and if else statement in es5
function oddOrEven(x) {
    let sum = 0;
    for(let num = 0; num < x.length; num++) {
        sum += x[num]
        if (sum%2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
    }
}

console.log(oddOrEven([1, 2, 3]))

// arr = ['9.4', '4.2'] change string to number

// function stringToNumber(arr) {
//     return arr.map(x => Number(x))
// }

// function stringToNumber(arr) {
//     newArr = []
//     arr.forEach((x) => {
//         newArr.push(parseInt(x))
//     })
//     return newArr
// }


// console.log(stringToNumber(['9.4', '4.2']))

// [1, 2, 3, 4, 5, 6] = "123456"

// function arrayToString(arr) {
//     let text = ''
//     for(let i = 0; i < arr.length; i++) {
//         text += arr[i]
//     }
//     return text
// }
// let example = arrayToString([1, 2, 3, 4, 5, 6])
// console.log(example)
// console.log(typeof example)



// function arrayToString(arr) {
//     return arr.join('');
// }

// same as line 76-78 but in one line
// const arrayToString = arr => arr.join('');

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));

//('hello') = ('olleh')



// reverse string
// function gnirts(x) {
//     let arr = x.split('')
 

//     let newArr = arr.reverse()


//     let joinNewArr = newArr.join('')
 

//     return joinNewArr
// }


// console.log(gnirts('Lydia'))