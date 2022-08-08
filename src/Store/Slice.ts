import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SensorDetailsType, SensorListType, SensorRowType, SensorWeeklyRowType, State } from "../Shared/Types/Types"
import { tranformStatsForChart, tranformWeeklyStatsForChart } from "../Shared/Util/Transformers"
import { fetchSensorDetailsAction, fetchSensorListAction, fetchSensorStatsAction, fetchSensorWeeklyStatsAction, setToggleDrawerAction } from "./Actions"

const initialState: State = {
    toggleDrawer: false,
    isLoading: false,
    sensorList: null,
    sensorStats: null,
    sensorDetails: null,
    sensorWeeklyStats: null
}

const slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {},
    extraReducers: {
        [setToggleDrawerAction.toString()]: (state: State) => {
            state.toggleDrawer = !state.toggleDrawer
        },
        [fetchSensorListAction.pending.toString()]: (state: State) => {
            state.isLoading = true
        },
        [fetchSensorListAction.fulfilled.toString()]: (state: State, action: PayloadAction<SensorListType>) => {
            state.sensorList = action.payload
            state.isLoading = false
        },
        [fetchSensorListAction.rejected.toString()]: (state: State) => {
            state.isLoading = false
        },
        [fetchSensorStatsAction.pending.toString()]: (state: State) => {
            state.isLoading = true
        },
        [fetchSensorStatsAction.fulfilled.toString()]: (state: State, action: PayloadAction<SensorRowType>) => {
            state.sensorStats = tranformStatsForChart(action.payload)
            state.isLoading = false
        },
        [fetchSensorStatsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false
        },
        [fetchSensorDetailsAction.pending.toString()]: (state: State) => {
            state.isLoading = true
        },
        [fetchSensorDetailsAction.fulfilled.toString()]: (state: State, action: PayloadAction<{ result: SensorDetailsType}>) => {
            state.sensorDetails = action.payload.result
            state.isLoading = false
        },
        [fetchSensorDetailsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false
        },
        [fetchSensorWeeklyStatsAction.pending.toString()]: (state: State) => {
            state.isLoading = true
        },
        [fetchSensorWeeklyStatsAction.fulfilled.toString()]: (state: State, action: PayloadAction<SensorWeeklyRowType>) => {
            state.sensorWeeklyStats =  tranformWeeklyStatsForChart(action.payload)
            state.isLoading = false
        },
        [fetchSensorWeeklyStatsAction.rejected.toString()]: (state: State) => {
            state.isLoading = false
        },
    }
})

const { reducer } = slice
export default reducer;

