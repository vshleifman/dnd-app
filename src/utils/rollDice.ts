export const rollDice = (sides: number, amount: number) => {
  const results: number[] = [];
  for (let i = 0; i < amount; i++) {
    results.push(Math.ceil(Math.random() * sides));
  }
  return results;
};
