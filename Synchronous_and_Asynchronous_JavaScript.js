// Execution Context
//synchronous

console.log("Start");

function Luk() {
  console.log("Programming is fun!");
}

Luk();

console.log("End");


//asyncrounous
console.log("Start");

setTimeout(() => {
  console.log("Programming is fun!");
}, 2000);

console.log("End");

//counter

let count = 1;

setInterval(() => {
  console.log(count);
  count++;
}, 1000);


//message

setTimeout(() => {
  console.log("Hello i am Lukman");
}, 2000);


// output after 2 seconds
