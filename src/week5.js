// let person = {
//     name: 'Tony',
//     age: 15,
//     driver: null,
// }

// if (person.age >=16) {
//    person.driver = 'Yes'
// } else {
//    person.driver = 'No'
// }



// person.driver = person.age >=16 ? 'Yes' : 'No';

// console.log(person.driver)

// console.log(person)


// let x = 4

// let y = 5 <= x ? 5 + 5 : x 
// console.log(y);

// let isStudent = true;
// let isNotStudent = false;
// //to print string data type instead of number, add backtick symbol
// let price = isStudent ? `Price is NZD 8` : 12
// console.log(price);

// let arr = [1,2,3,4,5,6,7]
// console.log(arr.length)
// for (i=0; i <= arr.length; i++) {
//    console.log('This is a loop')
// }

// for (let i = 0;; i++) {
//    console.log("loop, i = " + i);
//    if (i > 0)
//        break;
// };

// let counter = 5;
// function inc() { counter++; }for (let i = 0; i < 5; i++, inc());
// console.log(counter); // 10

// for (var i = 0; i < 10; i++) {
//    let x = i;
//    console.log(x)
// }

// for (let y = 0; y < 2; y++)
//     for (let x = 0; x < 2; x++)
//         console.log(y,x);
      
// for (let i = 0; i < 10; i++) {
//    if (i == 1) continue;
//    console.log(i);
// }

// for (let i = 0; i < 8; i++) {
//    console.log("loop");
//    break;
// }

// let string = 'Lydia Tie';
//    for (let value of string)
//    console.log(value);
//    console.log(string.length);

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//    for (let value of array)
//    console.log(value);
//    console.log(array.length);

// let object = { a: 1, b: 2, c: 3 };
//    for (let value of object) // Error: object is not iterable
//    console.log( value );

// let object = { a: 1, b: 2, c: 3, method: () => { } };
//    for (let value in object)
//     console.log(value, object[value]);

    let c = 0;
    while (c++ < 1000) {
      if (c > 30)
      continue;
        console.log(c);
    }
