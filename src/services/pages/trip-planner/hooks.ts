import { Unsubscribe } from '@reduxjs/toolkit';
import { useCallback, useEffect, useMemo } from 'react';

import { ProductCardProps } from '../../../components/ProductCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { startAppListening } from '../../../redux/store';
import { useGetAvailableDatesQuery } from '../../apis/date/api';
import { AvailableDatesResponse } from '../../apis/date/types';
import { useGetLocationsQuery } from '../../apis/location/api';
import { useSearchProductsQuery } from '../../apis/product/api';

import { ProductListState, ProductListStateMapping } from './enums';
import { setupTripPlannerListeners } from './listeners';
import { Filters, FiltersDisability, tripPlannerActions, tripPlannerSelectors } from './slice';
import { transformSearchProductsResponse } from './utils';

export type SetFilters = 'Country' | 'City' | 'Date';
export type TripPlannerActionKey = keyof typeof tripPlannerActions;
export type TripPlannerAction = (payload: string | number) => {
  payload: string | number;
  type: string;
};
export type QueryFetchState = { locations: boolean; products: boolean };
export type TripPlannerHook = [
  filters: Filters & {
    countryList: Array<string>;
    availableDates: AvailableDatesResponse;
  },
  setFilters: (filter: SetFilters, value: string | number) => void,
  products: Array<ProductCardProps>,
  productListState: string,
  isDisabled: FiltersDisability,
  isPending: QueryFetchState,
];

export function useTripPlannerState(): TripPlannerHook {
  const dispatch = useAppDispatch();
  const locationsQuery = useGetLocationsQuery();
  const availableDatesQuery = useGetAvailableDatesQuery();
  const filters = useAppSelector(tripPlannerSelectors.selectFilters);
  const productList = useAppSelector(tripPlannerSelectors.selectProductList);
  const isDisabled = useAppSelector(tripPlannerSelectors.selectIsDisabled);

  const combinedFilters = useMemo(() => {
    const countryList = Object.keys(locationsQuery.data || {});
    const availableDates = availableDatesQuery.data || [];
    return { ...filters, countryList, availableDates };
  }, [locationsQuery, availableDatesQuery, filters]);

  const setFilters = useCallback(
    (filter: SetFilters, value: string | number) => {
      dispatch(
        (tripPlannerActions[`change${filter}` as TripPlannerActionKey] as TripPlannerAction)(value),
      );
    },
    [dispatch],
  );

  const searchProductsQuery = useSearchProductsQuery(
    {
      cityId: filters.cityId as number,
      date: filters.date as string,
    },
    { skip: !filters.cityId || !filters.date },
  );

  const productListState: string = useMemo(() => {
    let state = ProductListState.WAITING_FOR_COUNTRY;
    if (filters.date && !searchProductsQuery.data?.length && !searchProductsQuery.isFetching) {
      state = ProductListState.NOT_FOUND;
    } else if (filters.date) {
      state = ProductListState.READY;
    } else if (filters.cityId) {
      state = ProductListState.WAITING_FOR_DATE;
    } else if (filters.country) {
      state = ProductListState.WAITING_FOR_CITY;
    }
    return ProductListStateMapping[state];
  }, [searchProductsQuery, filters]);

  const isPending: QueryFetchState = useMemo(
    () => ({ locations: locationsQuery.isFetching, products: searchProductsQuery.isFetching }),
    [locationsQuery, searchProductsQuery],
  );

  useEffect(() => {
    const unsubscribe: Unsubscribe = setupTripPlannerListeners(startAppListening);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (searchProductsQuery.isSuccess) {
      const transformedProductList = transformSearchProductsResponse(
        searchProductsQuery.data || [],
      );
      dispatch(tripPlannerActions.setProductList(transformedProductList));
    }
  }, [searchProductsQuery]);

  return [combinedFilters, setFilters, productList, productListState, isDisabled, isPending];
}
