import { createApi } from '@reduxjs/toolkit/query/react';

import { Apis } from '../../../enums/apis';
import { baseQuery } from '../base-query';

import { AvailableDatesResponse } from './types';

export const datesApi = createApi({
  reducerPath: Apis.DATE,
  baseQuery,
  endpoints: (builder) => ({
    getAvailableDates: builder.query<AvailableDatesResponse, void>({
      query: () => 'available_dates',
    }),
  }),
});

export const { useGetAvailableDatesQuery } = datesApi;
