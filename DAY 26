1 . Extract values from an array/object using destructuring.

//array destructuring//

const numbers = [10, 20, 30];

// extract values
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

1 b.

//object destructuring//

const person = {
  name: "Lukman",
  age: 22,
  city: "Chennai"
};

// extract values
const { name, age, city } = person;

console.log(name); // Lukman
console.log(age);  // 22
console.log(city); // Chennai

//2. Copy an array using spread operator//

const originalArray = [1, 2, 3];

// copy array
const copiedArray = [...originalArray];

copiedArray.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(copiedArray);  // [1, 2, 3, 4]

///3. Function using rest operator///

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(5, 10, 15, 20)); // 50
