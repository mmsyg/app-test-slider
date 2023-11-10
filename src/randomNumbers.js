export function randomNumbers(n) {
  let numbers = [];

  // Fill the array with single-character strings of numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    numbers.push(String(i)[0]);
  }

  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Choose the first four characters
  let randomFinalArray = numbers.slice(0, 4);

  return randomFinalArray;
}
