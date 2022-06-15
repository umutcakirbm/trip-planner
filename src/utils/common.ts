export const toCamelCase = (str: string): string => {
  const arr = str.split(/[_-]/);
  let newStr = '';
  for (let i = 1; i < arr.length; i++) {
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr[0] + newStr;
};

export const transformResponseToCamelCase = <T>(response: { [key: string]: unknown }): T => {
  return Object.entries(response).reduce(
    (map, [key, value]) => ({ ...map, [toCamelCase(key)]: value }),
    {} as T,
  ) as T;
};

export const transformResponseListToCamelCase = <T>(
  response: Array<{ [key: string]: unknown }>,
): Array<T> => {
  return response.map((item) => transformResponseToCamelCase<T>(item)) as Array<T>;
};
