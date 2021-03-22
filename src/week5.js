let person = {
    name: 'Tony',
    age: 15,
    driver: null,
}

if (person.age >=16) {
   person.driver = 'Yes'
} else {
   person.driver = 'No'
}



person.driver = person.age >=16 ? 'Yes' : 'No';

console.log(person.driver)

console.log(person)


let x = 4

let y = 5 <= x ? 5 + 5 : x 
console.log(y);

let isStudent = true;
let isNotStudent = false;
//to print string data type instead of number, add backtick symbol
let price = isStudent ? `Price is NZD 8` : 12
console.log(price);


