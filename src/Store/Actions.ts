import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../Shared/Constants/Constants';
import { getRequest } from '../Shared/NetworkService/NetworkService';
import {
    tranformStatsForChart,
    tranformWeeklyAvgStatsForChart,
    tranformWeeklyStatsForChart,
} from '../Shared/Util/Transformers';

export const setToggleDrawerAction = createAction(
    'sensor/setToggleDrawerAction',
);

export const fetchSensorListAction = createAsyncThunk(
    'sensor/fetchSensorListAction',
    async (page?: number) => {
        try {
            const result = await getRequest(API_ENDPOINTS.GET_SENSOR, {
                page,
            });
            return result;
        } catch {}
    },
);

export const fetchSensorStatsAction = createAsyncThunk(
    'sensor/fetchSensorStatsAction',
    async () => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR_STATS,
            );
            return tranformStatsForChart(results);
        } catch {}
    },
);

export const fetchSensorDetailsAction = createAsyncThunk(
    'sensor/fetchSensorDetailsAction',
    async (deviceId: string) => {
        try {
            const { result } = await getRequest(
                API_ENDPOINTS.GET_SENSOR + '/' + deviceId,
            );
            return result;
        } catch {}
    },
);

export const fetchSensorWeeklyStatsAction = createAsyncThunk(
    'sensor/fetchSensorWeeklyStatsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_STATS_WEEKLY,
            );
            return tranformWeeklyStatsForChart(results);
        } catch {}
    },
);

export const fetchSensorWeeklyAvgStatsAction = createAsyncThunk(
    'sensor/fetchSensorWeeklyAvgStatsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_STATS_WEEKLY_AVG,
            );
            return tranformWeeklyAvgStatsForChart(results);
        } catch {}
    },
);

export const fetchSensorLogsAction = createAsyncThunk(
    'sensor/fetchSensorLogsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_LOGS,
            );
            return results;
        } catch {}
    },
);

export const fetchSensorEventsAction = createAsyncThunk(
    'sensor/fetchSensorEventsAction',
    async (deviceId: string) => {
        try {
            const { results } = await getRequest(
                API_ENDPOINTS.GET_SENSOR +
                    '/' +
                    deviceId +
                    API_ENDPOINTS.GET_SENSOR_EVENTS,
            );
            return results;
        } catch {}
    },
);
