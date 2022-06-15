import { createApi } from '@reduxjs/toolkit/query/react';

import { Apis } from '../../../enums/apis';
import { baseQuery } from '../base-query';

import { LocationsResponse } from './types';

export const locationApi = createApi({
  reducerPath: Apis.LOCATION,
  baseQuery,
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResponse, void>({
      query: () => 'locations',
    }),
  }),
});

export const { useGetLocationsQuery } = locationApi;