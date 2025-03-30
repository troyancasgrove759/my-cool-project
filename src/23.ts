function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayMessage(message: string): void {
  console.log(message);
}
