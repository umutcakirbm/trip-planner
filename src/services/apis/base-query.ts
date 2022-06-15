import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { env } from '../../config/env';

export const baseQuery = fetchBaseQuery({
  baseUrl: env.API_GW,
  prepareHeaders: (headers) => {
    headers.set('content-type', 'application/json');
    return headers;
  },
});
