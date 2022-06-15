import { ListenerEffectAPI, Unsubscribe } from '@reduxjs/toolkit';

import { locationApi } from '../../apis/location/api';

import { tripPlannerActions } from './slice';

import type { AppDispatch, AppStartListening, RootState } from '../../../redux/store';

async function onChangeCountry(
  action: ReturnType<typeof tripPlannerActions.changeCountry>,
  listenerApi: ListenerEffectAPI<RootState, AppDispatch>,
) {
  listenerApi.cancelActiveListeners();

  if (await listenerApi.condition(locationApi.endpoints.getLocations.matchFulfilled)) {
    const { data } = locationApi.endpoints.getLocations.select()(listenerApi.getState());
    const cityList = data?.[action.payload] || [];
    listenerApi.dispatch(tripPlannerActions.setCityList(cityList));
  }
}

export function setupTripPlannerListeners(startListening: AppStartListening): Unsubscribe {
  const listeners = [
    startListening({
      actionCreator: tripPlannerActions.changeCountry,
      effect: onChangeCountry,
    })
  ];

  return () => listeners.forEach((unsubscribe) => unsubscribe());
}
