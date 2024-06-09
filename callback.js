// A callback function in JavaScript is a function that you pass as an argument to another function, and it gets called(or "called back") after the first function finishes its task.This is a common way to handle asynchronous operations, like loading data from a server or performing a delayed action.

// Simple Explanation
// Imagine you want to set an alarm to wake you up in the morning.You ask your friend to call you at 7 AM.Your friend is the "main function," and your request to call you at 7 AM is the "callback function." When 7 AM comes, your friend calls you.This call is the callback in action.

// Basic Example
// Let's create a simple example to illustrate a callback function.

// Scenario: Delayed Greeting
// You want to display a greeting message after a short delay.

// 1. Function with Callback: A function that accepts a callback function and calls it after a delay.
// 2. Callback Function: A function that displays the greeting message.


// Direct Calling(handleUserData):

// In this approach, fetchUserData directly calls the handleUserData function with the data or error.
// This tightly couples the fetchUserData function to handleUserData, meaning you cannot reuse fetchUserData with different handlers.

// Passing a Callback:

// When you pass handleUserData as a callback, fetchUserData becomes more flexible.You can call it with different callback functions depending on the context in which it's used.
// This promotes reusability and separation of concerns, making the code more modular and easier to test or maintain.
// Function with a callback
// function delayedGreeting(callback) {
//     setTimeout(() => {
//         // After 2 seconds, call the callback function
//         callback();
//     }, 2000); // 2-second delay
// }

// // Callback function to display a greeting
// function showGreeting() {
//     console.log("Hello, world!");
// }

// // Call delayedGreeting and pass showGreeting as the callback
// delayedGreeting(showGreeting);

// A callback function is a function you pass to another function, to be called later when the first function completes its work.This is particularly useful for handling asynchronous operations and making your code more flexible and modular.


// 1.not suitable for deep nested callbacks
// 1.promises are suitable

// Callbacks involve passing a function as an argument to another function.
// Example: fetchData(callbackFunction).
// Error Handling:

// Error handling in callbacks needs to be explicitly implemented within each callback function.
// Each callback function must check for errors and handle them individually.
//     Chaining:

// Using callbacks can lead to nested code structures, commonly referred to as "callback hell."
// Each asynchronous operation may require additional nested callbacks, making the code harder to read and maintain.
//     Async / Await Compatibility:

// Callbacks are not directly compatible with async / await syntax.
// Using async / await with callbacks can lead to awkward and less readable code.
//     Readability:

// Callbacks can become complex, especially when handling multiple layers of nested asynchronous operations.
// This complexity can reduce code readability and make it harder to understand the flow of execution.
//     Promises:

// Syntax:

// Promises provide methods like.then(), .catch(), and.finally() for handling asynchronous operations.
//     Example: fetchData().then(onSuccess).catch(onError).
// Error Handling:

// Promises centralize error handling using the .catch () method.
// Errors from any part of the promise chain can be caught and handled in a single.catch() block.
//     Chaining:

// Promises allow for cleaner and more readable code with flat chaining using.then() methods.
//     Each.then() call represents a subsequent step in the asynchronous operation, leading to a more linear code structure.
//         Async / Await Compatibility:

// Promises are directly compatible with async / await syntax.
//     async / await allows for writing asynchronous code in a synchronous style, making it easier to understand and maintain.
//         Readability:

// Promises promote readability by providing a more sequential and straightforward flow of asynchronous operations.
// Promise chains are easier to understand, making the code more readable and maintainable.
// Use Cases:

// Callbacks:

// Suitable for simple asynchronous operations with minimal complexity.
// Often used with legacy code or libraries that rely on callback patterns.
// Not recommended for complex asynchronous workflows due to potential callback hell and readability issues.
//     Promises:

// Ideal for handling complex asynchronous flows with multiple asynchronous operations.
// Provide better error handling and readability, especially when using async/await.
// Preferred choice for modern JavaScript development and interaction with promise - based APIs and libraries.