import { ProductCardProps } from '../../../components/ProductCard';
import { applyDiscountPercentageToPrice, transformNumberToCurrency } from '../../../utils/common';
import { SearchProductsResponse } from '../../apis/product/types';

import { ProductListState, ProductListStateMapping } from './enums';
import { Filters } from './slice';

export const transformSearchProductsResponse = (
  searchProductsResponse: SearchProductsResponse | undefined,
): Array<ProductCardProps> => {
  return (
    searchProductsResponse?.map((product) => {
      const priceStr = transformNumberToCurrency(product.price);
      return {
        id: product.id,
        image: product.image,
        link: product.productUrl,
        title: product.title,
        description: product.summary,
        price: product.discountPercentage
          ? applyDiscountPercentageToPrice(product.price, product.discountPercentage)
          : priceStr,
        discountPrice: product.discountPercentage ? priceStr : undefined,
      };
    }) || []
  );
};

export const transformCityListResponse = (
  cityListResponse: Array<[number, string]>,
): Array<{ label: string; value: number }> => {
  return cityListResponse.map((cityItem) => ({ value: cityItem[0], label: cityItem[1] }));
};

export const getProductListState = (
  data: SearchProductsResponse | undefined,
  filters: Filters,
  isError: boolean,
  isFetching: boolean,
): string => {
  let state = ProductListState.WAITING_FOR_COUNTRY;
  if (filters.date && isError) {
    state = ProductListState.NETWORK_ERROR;
  } else if (filters.date && !data?.length && !isFetching) {
    state = ProductListState.NOT_FOUND;
  } else if (filters.date) {
    state = ProductListState.READY;
  } else if (filters.cityId) {
    state = ProductListState.WAITING_FOR_DATE;
  } else if (filters.country) {
    state = ProductListState.WAITING_FOR_CITY;
  }
  return ProductListStateMapping[state];
};
