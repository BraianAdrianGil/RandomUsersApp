export const getRandomIndex = (min, max) => {
  const amplitude = max - min;
  const randomIndex = Math.round(Math.random() * amplitude);
  return min + randomIndex;
};
