import { createApi } from '@reduxjs/toolkit/query/react';

import { Apis } from '../../../enums/apis';
import { transformResponseListToCamelCase } from '../../../utils/common';
import { baseQuery } from '../base-query';

import { SearchProductsRequest, SearchProductsResponse } from './types';

export const productApi = createApi({
  reducerPath: Apis.PRODUCT,
  baseQuery,
  endpoints: (builder) => ({
    searchProducts: builder.query<SearchProductsResponse, SearchProductsRequest>({
      query: ({ date, cityId }) => `products?date=${date}&city_id=${cityId}`,
      transformResponse: (response: Array<{ [key: string]: unknown }>) =>
        transformResponseListToCamelCase(response),
    }),
  }),
});

export const { useSearchProductsQuery } = productApi;
