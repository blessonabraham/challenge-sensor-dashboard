import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MainRoutes } from "../Routes/MainRoutes"
import reducer from "./Slice";
import logger from 'redux-logger';

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type AppDispatch = typeof store.dispatch

export const Store = () => {
    return (
        <Provider store={store}>
            <MainRoutes />
        </Provider>
    )
}