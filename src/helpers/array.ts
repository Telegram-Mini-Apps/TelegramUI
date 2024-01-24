export const range = (startPosition: number, endPosition: number) => {
  const length = endPosition - startPosition + 1;
  return Array.from({ length }, (_, i) => startPosition + i);
};
