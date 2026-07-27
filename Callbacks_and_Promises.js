//accepts a callback

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Callback executed");
}

greetUser("Lukman", done);

//promise


function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is zero or negative");
    }
  });
}

//handling promise

checkNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
