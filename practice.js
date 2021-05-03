const input = [
    [0,1,0,0],
    [0,0,1,0],
    [0,1,0,1],
    [1,1,0,0]
  ]

    // Change mine to 'x'
const input1 = input.map(subarray => subarray.map(number => number === 1 ? number = 'x' : number));

//   console.log(input1)


// input.forEach((item) => {
 
//   let index = item.indexOf(1, 0);
//   let index1 = item.indexOf(1, 1);
//   let index2 = item.indexOf(1, 2);
 
//   if (index != -1 ) {
//     item[index] = 'x';

//     if (index1 != -1) {
//       item[index1] = 'x';
     
//       if (index2 != -1) {
//         item[index2] = 'x';
//         return item;
//       }
//     }
// }

// })



  function count(data, i, j) {
    
    let c = 0;
  
    const prevRow = data[i - 1];
    const currentRow = data[i];
    const nextRow = data[i + 1];
    
    [prevRow, currentRow, nextRow].forEach(row => {
      if (row) {
        if (row[j - 1] === 'x') c++;
        if (row[j] === 'x') c++;
        if (row[j + 1] === 'x') c++;
        
      }
    })
  
    return c;
  }

  function update(data) {
    return data.map((a, i) => {
      return a.map((b, j) => {
        return b === 'x' ? b : count(data, i, j)
        
      })
     
    })
  }

const result = update(input1)
console.log(result)

// let testarr = [2,3,4,5,6,7,8,9];
// let testarr1 = [11,34,56,78,23];

// function evenNumber(arr) {
//   let evenArr = arr.filter(num => num % 2 == 0);
//   console.log(evenArr);
// }

// evenNumber(testarr)
// evenNumber(testarr1)

// function testEqual(val) {
//   if (val == 12) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// console.log(testEqual(12))
// testEqual(12);





