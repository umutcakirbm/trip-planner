import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductCardProps } from '../../../components/ProductCard';
import { Slices } from '../../../enums/slices';
import { RootState } from '../../../redux/store';

export interface Filters {
  country: string | null;
  cityId: number | null;
  date: string | null;
  cityList: Array<[number, string]>;
}

export interface TripPlannerState {
  filters: Filters;
  productList: Array<ProductCardProps>;
}

export const tripPlannerSlice = createSlice({
  name: Slices.PAGE_TRIP_PLANNER,
  initialState: {
    filters: {
      country: null,
      cityId: null,
      date: null,
      cityList: [],
    },
    productList: [],
  } as TripPlannerState,
  reducers: {
    changeCountry(state, action: PayloadAction<string>) {
      state.filters.country = action.payload;
    },
    changeCity(state, action: PayloadAction<number>) {
      state.filters.cityId = action.payload;
    },
    changeDate(state, action: PayloadAction<string>) {
      state.filters.date = action.payload;
    },
    setCityList(state, action: PayloadAction<Array<[number, string]>>) {
      state.filters.cityList = action.payload;
    },
    setProductList(state, action: PayloadAction<Array<ProductCardProps>>) {
      state.productList = action.payload;
    },
  },
});

export const tripPlannerActions = tripPlannerSlice.actions;

export const tripPlannerSelectors = {
  selectFilters: (state: RootState): Filters => state[tripPlannerSlice.name].filters,
  selectProductList: (state: RootState): Array<ProductCardProps> =>
    state[tripPlannerSlice.name].productList,
};
