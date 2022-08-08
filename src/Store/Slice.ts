import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SensorListType, SensorRowType, State } from "../Shared/Types/Types"
import { tranformStatsForChart } from "../Shared/Util/Transformers"
import { fetchSensorListAction, fetchSensorStatsAction, setToggleDrawerAction } from "./Actions"

const initialState: State = {
    toggleDrawer: false,
    isLoading: false,
    sensorList: null,
    sensorStats: null
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
    }
})

const { reducer } = slice
export default reducer;

