// Arrow Functions:
const multiply = (x, y) => x * y;

// Template Literals:
const firstName = "Emily";
console.log(`Hello, ${firstName}!`);

// Let and Const Declarations:
let counter = 0;
counter = 1; // Valid

const PI_VALUE = 3.14;

// Default Parameters:
function greet(name = "World") {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, World!
greet("David"); // Hello, David!

// Rest and Spread Operators:
const numbers = [1, 2, 3];
const combined = [...numbers, 4, 5];

function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

sum(1, 2, 3, 4); // 10

// Destructuring Assignment:
const personInfo = { fullName: "Alice Doe", age: 30 };
const { fullName, age } = personInfo;
console.log(fullName, age); // Alice Doe 30

// Object Literal Enhancements:
const width = 10, height = 20;
const dimensions = { width, height }; // Equivalent to { width: width, height: height }

// Classes:
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

const triangle = new Triangle(5, 8);
console.log(triangle.area()); // 20

// Modules: (Assuming usage in a module)
// export.js
// export const EULER_NUMBER = 2.718;

// import.js
// import { EULER_NUMBER } from './export.js';

// Promises:
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulated async operation
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData().then(data => console.log(data));

// Symbol Data Type:
const uniqueId = Symbol("id");
const obj = {
    [uniqueId]: 123,
    name: "Bob"
};

console.log(obj[uniqueId]); // 123

// Iterators and Generators:
const iterableArray = [1, 2, 3];
const iterator = iterableArray[Symbol.iterator]();

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const sequenceGenerator = generateSequence();

// Maps and Sets:
const myMap = new Map();
myMap.set("name", "Jane");
myMap.set("age", 25);

const mySet = new Set([1, 2, 3, 3, 4]);

// Array Methods:
const items = [10, 20, 30, 40, 50];
console.log(items.find(item => item > 30)); // 40

// String Methods:
const text = "Good morning!";
console.log(text.endsWith("morning")); // true

// Object.assign:
const sourceObj1 = { x: 1, y: 2 };
const sourceObj2 = { y: 3, z: 4 };
const mergedObject = Object.assign({}, sourceObj1, sourceObj2);

// Typed Arrays:
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;

// Binary and Octal Number Formats:
const binaryNumber = 0b1010; // Binary
const octalNumber = 0o755; // Octal

// Enhanced Regular Expressions:
const regexPattern = /hello/g;

// Enhanced Error Handling:
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// throw new CustomError("Error: Something went wrong!");
