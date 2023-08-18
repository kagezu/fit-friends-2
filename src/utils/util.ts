export const toUpperCaseFirst = (value: string) => {
  if (value[0]) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
};
