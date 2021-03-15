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

x = '1234567890';
console.log(typeof x)
let y = Number(x)

console.log(typeof y);

const a = 1 + 1
console.log(a);

const b = a + 2
console.log(b);

//object datatype
const information = {
    student : 'Lydia',
    country : 'Malaysia',
    city : 'Nelson',
    postalCode : 7010,
    age : 3
}

let c = 11

if(c !== 11) {
    console.log('its true')
}
else {
    console.log('error')
}

let l = 5 // l has been assigned value 5
let m = l // m has been assigned value l which is 5, line 93 memory deleted

console.log(l)
console.log(m)
console.log(l === m)

l = 10 // new value assigned to l, memory is now define l as 10
console.log(l)
console.log(m)
console.log(l === m)