export function exampleFunction(): void {
  console.log("Hello from TypeScript!");
}

// Example usage in your project
try {
  if (true) {
    exampleFunction();
  }
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
}
