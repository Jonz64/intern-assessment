// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove characters that are not alphabetic nor numeric and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
const testString1 = "Never odd or even";
console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`); // Output: true

const testString2 = "racecar";
console.log(`"${testString2}" is a palindrome: ${isPalindrome(testString2)}`); // Output: true

const testString3 = "hello world";
console.log(`"${testString3}" is a palindrome: ${isPalindrome(testString3)}`); // Output: false