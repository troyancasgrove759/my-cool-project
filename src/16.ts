function sumTwoNumbers(a: number, b: number): number {
    return a + b;
}

console.log(sumTwoNumbers(5, 3)); // Output: 8

function isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
}

console.log(isPalindrome("radar")); // Output: true
