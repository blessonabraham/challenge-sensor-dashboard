import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

// export const setIsDrawerOpenAction = createAsyncThunk(
//     'main/setIsDrawerOpenAction',
//     async (isDrawerOpen: string) => {
//       return isDrawerOpen
//     }
//   )

export const setToggleDrawerAction = createAction('main/setToggleDrawerAction')