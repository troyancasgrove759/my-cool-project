function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(1, 10)); // Outputs a random integer between 1 and 10

