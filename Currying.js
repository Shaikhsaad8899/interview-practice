    // Currying is a functional programming technique in JavaScript (and other languages) where a function is transformed into a series of functions, each taking a single argument. In other words, a function that takes multiple arguments is broken down into a chain of functions that each take a single argument. This can be particularly useful for function composition and creating more flexible and reusable code.

    // Concept of Currying
// Without Currying:
    // A function that takes multiple arguments in a single call.

// With Currying:
    // A curried function takes the first argument and returns a new function that takes the second argument and so on, until all arguments have been provided.

// WITHOUT CURRYING
    // function addThreeNumbers(a, b, c) {
    //     return a + b + c;
    // }
    
    // // Usage:
    // console.log(addThreeNumbers(1, 2, 3)); // Output: 6

// WITH CURRYING
    // function curriedAdd(a) {
    //     return function(b) {
    //         return function(c) {
    //             return a + b + c;
    //         }
    //     }
    // }
    
    // // Usage:
    // console.log(curriedAdd(1)(2)(3)); // Output: 6

// WHEN TO USE ?

    // You can pre-set some arguments and leave the rest to be provided later, making it easier to reuse and customize functions for different scenarios.