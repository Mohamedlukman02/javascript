
///Rewrite code with let and const.
Use template literals with variables.
Create a function with default parameter values.///




const appName = "User App"; // constant

let userName = "Lukman"; // can change
let userAge = 22;

// function with default parameter
function createMessage(name = "Guest", age = 18) {
  return `Welcome to ${appName}, ${name}! You are ${age} years old.`;
}

// using the function
let message1 = createMessage(userName, userAge);
let message2 = createMessage(); // uses default values

console.log(message1);
console.log(message2);

// updating let variable
userAge = 23;

console.log(`Updated age for ${userName} is ${userAge}`);
