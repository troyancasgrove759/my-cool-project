function getRandomNumber(min: number = 0, max: number = 100): number {
    const range = max - min + 1;
    let rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
}
