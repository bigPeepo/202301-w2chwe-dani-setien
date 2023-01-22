const randomBoolean = () => Math.round(Math.random() < 0.5);

export const randomSeedRowLength = (rowLength) => {
  const resultingSeed = [];
  for (let i = 0; i < rowLength * rowLength; i++) {
    resultingSeed.push(randomBoolean());
  }

  return resultingSeed;
};
