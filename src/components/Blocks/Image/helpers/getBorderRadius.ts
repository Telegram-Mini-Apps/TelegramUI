export const getBorderRadius = (size: number) => {
  if (size < 40) {
    return 4;
  }

  if (size < 96) {
    return 8;
  }

  return 12;
};
