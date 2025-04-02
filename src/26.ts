function calculateGCD(a: number, b: number): number {
  if (!Number.isInteger(b)) {
    throw new Error("Invalid base value");
  }

  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function isPerfectSquare(num: number): boolean {
  const root = Math.sqrt(num);
  return num === Math.floor(root * root);
}
