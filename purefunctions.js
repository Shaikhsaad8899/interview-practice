// Pure functions are functions that have two main characteristics: they always produce the same output for the same input, and they do not have side effects.

// Let's break down these characteristics:

// Same Output for Same Input:

// A pure function, when given the same input, will always return the same output, regardless of when or how many times it's called.
// This property ensures predictability and determinism, making pure functions easier to reason about and test.
// It implies that pure functions do not rely on any external state or context.
// No Side Effects:

// A pure function does not modify variables outside its local scope, mutate data, perform I/O operations (such as network requests or file I/O), or cause any observable effects.
// This property makes pure functions easier to understand, debug, and maintain, as they have a clear and isolated behavior.
// It implies that pure functions are referentially transparent, meaning you can replace a function call with its result without changing the program's behavior.
// Here's an example of a pure function:


function add(a, b) {
    return a + b;
}
const abc = add(3,6)
console.log(abc);
// This add function takes two parameters and returns their sum. It fulfills both criteria of a pure function:

// It always produces the same output for the same input (e.g., add(2, 3) will always return 5).
// It does not cause any side effects; it only performs a computation based on its inputs.
// In contrast, consider a function that modifies a global variable:


let counter = 10;

function incrementCounter() {
    counter++;
}
incrementCounter()
const acc = incrementCounter(1)
console.log(acc);
// let counter = 10;

// function incrementCounter(valueToAdd) {
//     counter += valueToAdd; // Increment counter by the provided value
//     return counter; // Return the updated counter value
// }

// // Call the incrementCounter function with a valueToAdd of 1
// const acc1 = incrementCounter(1); // acc1 will be 11 (10 + 1)

// // Call the incrementCounter function again with a valueToAdd of 1
// const acc2 = incrementCounter(1); // acc2 will be 12 (11 + 1)

// // Log the updated counter values
// console.log(acc1); // Output: 11
// console.log(acc2); // Output: 12
