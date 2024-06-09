// A callback function in JavaScript is a function that you pass as an argument to another function, and it gets called (or "called back") after the first function finishes its task. This is a common way to handle asynchronous operations, like loading data from a server or performing a delayed action.

// Simple Explanation
    // Imagine you want to set an alarm to wake you up in the morning. You ask your friend to call you at 7 AM. Your friend is the "main function," and your request to call you at 7 AM is the "callback function." When 7 AM comes, your friend calls you. This call is the callback in action.

// Basic Example
    // Let's create a simple example to illustrate a callback function.

    // Scenario: Delayed Greeting
    // You want to display a greeting message after a short delay.

// 1. Function with Callback: A function that accepts a callback function and calls it after a delay.
// 2. Callback Function: A function that displays the greeting message.


// Direct Calling (handleUserData):

    // In this approach, fetchUserData directly calls the handleUserData function with the data or error.
    // This tightly couples the fetchUserData function to handleUserData, meaning you cannot reuse fetchUserData with different handlers.

// Passing a Callback:

    // When you pass handleUserData as a callback, fetchUserData becomes more flexible. You can call it with different callback functions depending on the context in which it's used.
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
