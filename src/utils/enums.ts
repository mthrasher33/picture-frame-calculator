// Utility function to retrieve enum key by value
function getKeyByValue<T extends string | number>(
  enumObject: any,
  value: T
): string | undefined {
  return Object.keys(enumObject).find((key) => enumObject[key] === value);
}

export default getKeyByValue;
