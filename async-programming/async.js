// // This file explains the use of async and await
// // explanation : async and await are keywords in JavaScript that allow you to write asynchronous code in a more readable and maintainable way.


// async function getTodos() {
//   let number_of_todos = 10;
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${number_of_todos}`);
//   const data = await response.json();
//   return data;
// }

// getTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // in the above example, getTodos() returns a promise, a promise is an object that represents the eventual completion or failure of an asynchronous operation.


// This is an example of the synchronous programming.
// const codeBlocker = () => {
//   let i = 0;
//   while (i < 10000000000) {
//     i++;
//   }
//   console.log("Hello B");
// }

// let start_time = Date.now();

// console.log("Hello A");

// codeBlocker();

// console.log("Hello C");

// console.log(`Time taken: ${(Date.now() - start_time) / 1000} seconds`);

// This is an example of the asynchronous programming.

// console.log("Hello A");

// setTimeout(() => {
//   console.log("Hello B");
// }, 2000);

// console.log("Hello C");

// Output =>
// Hello A
// Hello C
// Hello B

// To make the codeBlocker function asynchronous, we use the promise.

async function codeBlocker() { 
  let i = 0;
  return new Promise((resolve, reject) => {
    while (i < 1000000000) {
      i++;
    }
    resolve("Hello B");
    reject("Error");
  })
    
}

let start_time = Date.now();

console.log("Hello A");

const promise = codeBlocker();
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log("Hello C");

console.log(`Time taken: ${(Date.now() - start_time) / 1000} seconds`);

// So this was the synchronous and the asynchronous programming in JavaScript, but it is necessary to understand how the application can work in a better way, with the asynchronous or the synchronous programming.

// We can think in the synchronous programming as a chef who is preparing a meal, but the meal is not ready yet, so the chef has to wait for it to be ready.

// But the asynchronous programming is when the chef is preparing the meal, but he can start preparing another meal as soon as the previous meal is ready.