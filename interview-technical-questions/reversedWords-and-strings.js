function reverseEachWord(str) {
    return str.split(' ')
              .map(word => word.split('').reverse().join(''))
              .join(' ');
}

// Example usage:
const inputString = "I'm a Javascript Developer...";
const outputString = reverseEachWord(inputString);
console.log(outputString); // Output: "hkiahs daas"
