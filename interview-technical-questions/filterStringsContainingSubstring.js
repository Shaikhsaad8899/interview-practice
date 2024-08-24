function filterStringsContainingSubstring(strings, substring) {
    return strings.filter(str => str.startsWith(substring));
}

// Example usage:
const myStrings = ["abc", "bca", "cab", "dab", "efg"];
const substring = "ab";
const filteredStrings = filterStringsContainingSubstring(myStrings, substring);

console.log(filteredStrings);
