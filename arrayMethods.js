// task-Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0? word: word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));



// task - Filter range
// function filterRange(arr,a,b) {
//     let result = [];

//     for(let i=0;i<arr.length;i++) {
//         if(a <= arr[i] && arr[i] <= b) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered );

// console.log( arr ); 

// using filter
function filterRange(arr,a,b) {
    return arr.filter(i=> (a<= i && i<= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered );
console.log( arr ); 

// task-Filter range "in place"
function filterRangeInPlace(arr1,a,b) {
    for (let i=0;i<arr1.length;i++) {
        let value = arr1[i];
        if(value<a || value>b) {
            arr1.splice(i, 1);
            i--
        }
    }
}
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4); 
console.log( arr1 );


// task - sort in Decreasing order
let arr2= [5, 2, 1, -10, 8];
arr2.sort((a,b) => b-a);
console.log( arr2 ); 
