// async and await are keywords introduced in ES2017(ES8) that simplify asynchronous programming in JavaScript.They provide a more synchronous - like syntax for writing asynchronous code, making it easier to read and maintain.

// Async Functions and Await Keyword
// Async Function:

// An async function is a function that returns a promise implicitly.
// Inside an async function, you can use the await keyword to pause the execution of the function until a promise is settled.
// An async function can contain one or more await expressions.
// Await Keyword:

// The await keyword is used to pause the execution of an async function until a promise is resolved or rejected.
// It waits for the promise to settle, and then resumes the async function's execution with the resolved value.
// Example of Async / Await
// Let's illustrate async/await with an example of fetching data from an API asynchronously:

// Function to fetch data asynchronously
async function fetchData() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error further if needed
    }
}

// Call the async function
async function processData() {
    try {
        const data = await fetchData();
        // Process the fetched data here
    } catch (error) {
        // Handle errors from fetchData or processData
    }
}

processData();