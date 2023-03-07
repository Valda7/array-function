// 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.


Mutating array methods are methods that modify the original array and return the modified array as the output, while non-mutating array methods return a new array as the output without modifying the original array.

Here are 5 array methods that fall under each category:


// Mutating Array Methods:

push()    
pop() 
shift() 
unshift() 
splice() 

// Non-Mutating Array Methods:

concat() 
slice() 
filter() 
map() 
join() 


// 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’


let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
const index = languages.indexOf('PHP');
if (index !== -1) {
  languages.splice(index, 1, 'Go', 'Rust');
}

console.log(languages);
['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']



// 3. What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

['apple', 'mango', 'orange'].

// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

function max(arr) {
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}
max([4, 5, 10, -2]); // returns 10


// 5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(arr) {
  return arr.map((val, index) => val * index);
}
valTimesIndex([1,2,3]); // returns [0,2,6]
valTimesIndex([5,10,15]); // returns [0,10,30]
