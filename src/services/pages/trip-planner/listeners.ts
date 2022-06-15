import { ListenerEffectAPI, Unsubscribe } from '@reduxjs/toolkit';

import { locationApi } from '../../apis/location/api';

import { tripPlannerActions } from './slice';
import { transformCityListResponse } from './utils';

import type { AppDispatch, AppStartListening, RootState } from '../../../redux/store';

function onChangeCountry(
  action: ReturnType<typeof tripPlannerActions.changeCountry>,
  listenerApi: ListenerEffectAPI<RootState, AppDispatch>,
) {
  listenerApi.cancelActiveListeners();

  const getLocationQuery = locationApi.endpoints.getLocations.select()(listenerApi.getState());
  const cityList = getLocationQuery.data?.[action.payload] || [];
  const transformedCityList = transformCityListResponse(cityList);
  listenerApi.dispatch(tripPlannerActions.setCityList(transformedCityList));
}

export function setupTripPlannerListeners(startListening: AppStartListening): Unsubscribe {
  const listeners = [
    startListening({
      actionCreator: tripPlannerActions.changeCountry,
      effect: onChangeCountry,
    }),
  ];

  return () => listeners.forEach((unsubscribe) => unsubscribe());
}
