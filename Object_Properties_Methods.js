//Create an object
let person = {
    name: "John", age: 20,
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};
person.sayHello();

//Access object properties
console.log(person.name); // John
console.log(person.age);  // 20

//Modify object properties
person.name = "Alice";
person.age = 25;

console.log(person.name); // Alice
console.log(person.age);  // 25

//Call object method
person.sayHello(); // Hello, my name is Alice
