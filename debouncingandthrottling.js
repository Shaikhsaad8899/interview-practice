// Debouncing and throttling are techniques used to control the rate at which a function is executed, particularly in scenarios where the function might be called frequently, such as in event handlers like scrolling or resizing.

// Debouncing delays the execution of a function until after a certain amount of time has passed since the last time the function was invoked. It's useful when you want to ensure that a function is only called once after a series of rapid invocations, such as when typing in a search box.

// Throttling, on the other hand, limits the rate at which a function can be executed. It ensures that the function is called at most once per specified interval. Throttling is useful when you want to ensure that a function is not called too frequently, such as when handling scroll events.

// Here are examples of debouncing and throttling using the simplest implementations:

// Debouncing:

// function debounce(func, delay) {
//     let timeoutId;

//     return function () {
//         const context = this;
//         const args = arguments;

//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(context, args);
//         }, delay);
//     };
// }

// // Example usage
// const debouncedFunc = debounce(() => {
//     console.log('Search API call...');
// }, 3000); // Debounce for 300 milliseconds

// // Call the debounced function multiple times quickly
// debouncedFunc(); // This call is ignored
// debouncedFunc(); // This call is ignored
// debouncedFunc(); // This call is ignored

// After 300 milliseconds of inactivity, the debounced function is finally called
// Output: Search API call...
// Throttling:

function throttle(func, delay) {
    let isThrottled = false;

    return function () {
        const context = this;
        const args = arguments;

        if (!isThrottled) {
            func.apply(context, args);
            isThrottled = true;

            setTimeout(() => {
                isThrottled = false;
            }, delay);
        }
    };
}

// Example usage
const throttledFunc = throttle(() => {
    console.log('Scroll event handler...');
}, 2000); // Throttle to at most once every 300 milliseconds

// Simulate rapid scrolling events
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        throttledFunc(); // This call is throttled
    }, i * 1000); // Call every 50 milliseconds
}

// Output: Scroll event handler... (only once every 300 milliseconds)
// In both examples, we create wrapper functions (debounce and throttle) that wrap around the original function to control its execution. These wrapper functions ensure that the original function is only called either after a certain delay (debouncing) or at most once per specified interval (throttling).