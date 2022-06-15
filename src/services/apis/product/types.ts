export type SearchProductsRequest = {
  date: string;
  cityId: number;
};

export type SearchProductsProductResponse = {
  productUrl: string;
  image: string;
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  summary: string;
  cityId: number;
  availableDates: Array<string>;
};

export type SearchProductsResponse = Array<SearchProductsProductResponse>;
