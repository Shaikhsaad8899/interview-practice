// Example of a higher-order function that accepts another function as an argument
function applyOperation(value, action) {
    return action(value);
}

// Callback function to double a value
function doubleValue(x) {
    return x * 2;
}

// Pass the doubleValue function as an argument to applyOperation
// const result = applyOperation(5, doubleValue); // result is 10

// Example of a higher-order function that returns another function
function createMultiplierFunction(factor) {
    return function (num) {
        console.log(factor,num);
        return num * factor;
    };
}

// Create a function that multiplies by 3
const multiplyByThree = createMultiplierFunction(3);
const multipliedResult = multiplyByThree(5); // multipliedResult is 15

// Example of function composition using higher-order functions
function composeFunctions(...functions) {
    return function (value) {
        return functions.reduceRight((accumulator, func) => func(accumulator), value);
    };
}

// Example functions
function addTwo(value) {
    return value + 2;
}

function multiplyByFour(value) {
    return value * 4;
}

// Create a composed function that first adds 2 and then multiplies by 4
const composedAction = composeFunctions(multiplyByFour, addTwo);
const result = composedAction(5); // result is 28 (5 + 2 = 7, 7 * 4 = 28)
console.log(result);