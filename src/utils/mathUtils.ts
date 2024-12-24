export const clamp = (num: number, min: number, max: number): number => {
  if (min > max) {
    throw new RangeError('clamp must be greater than 0');
  }
  return Math.min(Math.max(num, min), max);
};
