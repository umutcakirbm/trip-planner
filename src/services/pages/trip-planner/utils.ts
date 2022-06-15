import { ProductCardProps } from '../../../components/ProductCard';
import { applyDiscountPercentageToPrice, transformNumberToCurrency } from '../../../utils/common';
import { SearchProductsResponse } from '../../apis/product/types';

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
