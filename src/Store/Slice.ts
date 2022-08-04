import { createSlice } from "@reduxjs/toolkit"
import { setToggleDrawerAction } from "./Actions"

export interface State {
    toggleDrawer: boolean
}

const initialState = {
    toggleDrawer: false
} as State

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    extraReducers: {
        [setToggleDrawerAction.toString()]: (state: State) => {
            state.toggleDrawer = !state.toggleDrawer
        }
    }
})

const { reducer } = slice
export default reducer;

