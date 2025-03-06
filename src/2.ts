// my-cool-project/src/main.ts
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomInt(10);
console.log(`Random Number: ${randomNumber}`);
