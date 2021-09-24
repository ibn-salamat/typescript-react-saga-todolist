const defaultRange = 9999999;

export function uid(): number {
  return getRandomNumber(defaultRange) + getRandomNumber(defaultRange);
}

function getRandomNumber(range: number): number {
  return Math.random() * range;
}
