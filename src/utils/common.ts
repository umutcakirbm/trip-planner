import { env } from '../config/env';

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

export const transformNumberToCurrency = (price: number): string =>
  `${env.CURRENCY}${price.toFixed(2)}`;

export const applyDiscountPercentageToPrice = (
  price: number,
  discountPercentage: number,
): string => {
  const discountedPrice = price * (1 - discountPercentage * 0.01);
  return `${env.CURRENCY}${discountedPrice.toFixed(2)}`;
};
