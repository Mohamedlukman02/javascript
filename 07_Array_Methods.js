// Use filter to get even numbers from an array.
let num = [1,2,3,4,5];
function evenNumbers() {
    console.log(num.filter((item) => item % 2 === 0));
}
evenNumbers();

// Output:
// [2, 4]

// Use reduce to find the sum of an array.
let numbers = [1,2,3,4,5];
function sumNumbers() {
    console.log(numbers.reduce((accumulator, item) => accumulator + item, 0));
}
sumNumbers();

// Output:
// 15

// Find the first number greater than 10.
let a = [5, 3, 29, 10, 15];
function findNumber() {
    console.log(a.find((item) => item > 10));
}
findNumber();

// Output:
// 29

// Check if array includes a specific value.
let c = [5, 3, 29, 10, 15];
function checkNumber() {
    console.log(c.includes(10));
}
checkNumber();

// Output:
// true

// Use map to double all numbers in an array.
let number = [2,4,5,9,10];
function doubleValue() {
    console.log(number.map((item) => item * 2));
}
doubleValue();

// Output:
// [4, 8, 10, 18, 20]
