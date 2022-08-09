import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MainRoutes } from '../Routes/MainRoutes';
import reducer from './Slice';
import logger from 'redux-logger';
import { ErrorBoundary } from '../Shared/HOC/ErrorBoundary';

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;

export const Store = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <MainRoutes />
            </Provider>
        </ErrorBoundary>
    );
};
