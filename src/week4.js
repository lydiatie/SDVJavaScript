// Review
/**
Values & Variables
 */
// Declared variables and added value to string
let country = "New Zealand"
let city = "Nelson"
let postalCode = "7010"

console.log(typeof country);
console.log(city);
console.log(typeof postalCode);

//Datatype
let isIsland = true
//Declared variable but not initialized
let language

console.log(typeof isIsland);
console.log(typeof language)

language = "Arabic"
console.log(language)

let number = 10
console.log(number)

console.log(number / 2)
console.log(number > 6)
console.log(number < 2)

const address = country + ' ' + city + ' ' + postalCode
console.log(address)

//string template
let string = `My address is ${country}, ${city} and ${postalCode}`

console.log(string)

let x = 'Lydia';

// && = and || = or
if (x === 'Lydia' || typeof 'string') {
    console.log('this is true')
} else {
    console.log('Error')
}

if (typeof x === 'number') {
    console.log('this is true')
}
else {
    console.log('Error')
}

if (typeof city === 'string') {
    console.log('True. The city is Nelson')
}
else {
    console.log('This is false')
}
