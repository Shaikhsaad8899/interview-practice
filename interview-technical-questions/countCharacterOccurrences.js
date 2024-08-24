function countAllCharacters(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

const myString = "hello world";
const result = countAllCharacters(myString);

console.log(result);