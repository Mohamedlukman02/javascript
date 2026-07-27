// Function that returns a Promise



function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });




// Using async/await


async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();

  2 )  <<<<<<<// Save and Remove a value in localStorage ///// >>>

<< SAVE >>

localStorage.setItem("username", "Lukman");

<REMOVE >

localStorage.removeItem("username");

3) <<<<<<<Save and Remove a value in sessionStorage>>>>>

<<SAVE>>

sessionStorage.setItem("username", "Lukman");

<<REMOVE>>

sessionStorage.removeItem("username");



