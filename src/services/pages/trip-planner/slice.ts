import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductCardProps } from '../../../components/ProductCard';
import { Slices } from '../../../enums/slices';
import { RootState } from '../../../redux/store';

export type Filters = {
  country?: string;
  cityId?: number;
  date?: string;
  cityList: Array<{ label: string; value: number }>;
};

export type FiltersDisability = {
  city: boolean;
  date: boolean;
};

export type TripPlannerState = {
  filters: Filters;
  productList: Array<ProductCardProps>;
  isDisabled: FiltersDisability;
};

export const tripPlannerSlice = createSlice({
  name: Slices.PAGE_TRIP_PLANNER,
  initialState: {
    filters: {
      cityList: [],
    },
    productList: [],
    isDisabled: {
      city: true,
      date: true,
    },
  } as TripPlannerState,
  reducers: {
    changeCountry(state, action: PayloadAction<string>) {
      state.filters.country = action.payload;
      state.filters.cityId = undefined;
      state.filters.date = undefined;
      state.isDisabled.city = false;
      state.isDisabled.date = true;
      state.productList = [];
    },
    changeCity(state, action: PayloadAction<number>) {
      state.filters.cityId = action.payload;
      state.filters.date = undefined;
      state.isDisabled.date = false;
      state.productList = [];
    },
    changeDate(state, action: PayloadAction<string>) {
      state.filters.date = action.payload;
      state.productList = [];
    },
    setCityList(state, action: PayloadAction<Array<{ label: string; value: number }>>) {
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
  selectIsDisabled: (state: RootState): FiltersDisability =>
    state[tripPlannerSlice.name].isDisabled,
};
