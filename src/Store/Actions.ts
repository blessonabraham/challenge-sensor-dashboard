import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../Shared/Constants/Constants';
import { getRequest } from '../Shared/NetworkService/NetworkService';

export const setToggleDrawerAction = createAction(
  'sensor/setToggleDrawerAction',
);

export const fetchSensorListAction = createAsyncThunk(
  'sensor/fetchSensorListAction',
  async (page?: number) => {
    try {
      const result = await getRequest(API_ENDPOINTS.GET_SESNORS, { page });
      return result;
    } catch {}
  },
);

export const fetchSensorStatsAction = createAsyncThunk(
  'sensor/fetchSensorStatsAction',
  async () => {
    try {
      const result = await getRequest(API_ENDPOINTS.GET_SESNORS_STATS);
      return result;
    } catch {}
  },
);
