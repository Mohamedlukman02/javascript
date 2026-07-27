// 1. Function Declaration - Add two numbers

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// 2. Function Expression - Multiply two numbers

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 2));

// 3. Arrow Function - Subtract two numbers

const subtract = (a, b) => a - b;
console.log(subtract(10, 6));

// 4. Function with parameters and return value

function greet(name) {
    return "Hello " + name;
}
console.log(greet("Lukman"));

// 5. Global vs Local Scope

let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

