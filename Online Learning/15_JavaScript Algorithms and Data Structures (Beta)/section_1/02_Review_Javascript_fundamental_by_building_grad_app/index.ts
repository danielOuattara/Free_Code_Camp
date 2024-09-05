function calculateAverageUsingReduceTS(numbers: number[]): number {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const average = sum / numbers.length;
  return average;
}

const numbersTS: number[] = [10, 20, 30, 40, 50];
const average_1 = calculateAverageUsingReduceTS(numbersTS);
console.log("Average using reduce in TypeScript:", average_1); // Output: 30

//--

function calculateAverage(numbers: number[]): number {
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

const average_2: number = calculateAverage(numbersTS);
console.log("Average in TypeScript:", average_2); // Output: 30
