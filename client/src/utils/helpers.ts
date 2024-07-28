export const generateRandomNumber = (min: number, max: number): number => {
  if (min > max)
    throw new Error("Min value should be less than or equal to max value.");

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const generateRandomNumbersArr = (
  min: number,
  max: number,
  count: number
) => {
  if (min > max) {
    throw new Error("Min value should be less than or equal to max value.");
  }
  if (count <= 0) {
    throw new Error("Count should be a positive number.");
  }
  if (count > max - min + 1) {
    throw new Error(
      "Count should be less than or equal to the number of unique values in the range."
    );
  }

  // Generate an array of all possible values in the range
  const rangeArray = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = rangeArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rangeArray[i], rangeArray[j]] = [rangeArray[j], rangeArray[i]];
  }

  // Return the first `count` elements
  return rangeArray.slice(0, count);
};
