import { configureStore } from '@reduxjs/toolkit';
import { cleanup, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { SENSOR_DASHBOARD } from '../../Shared/Constants/Constants';
import reducer, { initialState } from '../../Store/Slice';
import mockAxios from 'jest-mock-axios';
import { mockSensorDetails, mockSensorEvents, mockSensorList, mockSensorLogs, mockSensorStats, mockSensorWeeklyAvgStats, mockSensorWeeklyStats } from '../../Shared/Mocks/Mocks';
import { SensorDetailComponent } from './SensorDetailComponent';

describe('SensorDetailComponent', () => {
    beforeAll(() => {
        global.ResizeObserver = require('resize-observer-polyfill');
    });
    afterEach(() => {
        cleanup;
        mockAxios.reset();
    });

    const renderWithStoreHistory = () => {
        const modifiedState = {
            ...initialState,
            sensorDetails: mockSensorDetails,
            sensorWeeklyStats: mockSensorWeeklyStats,
            sensorWeeklyAvgStats: mockSensorWeeklyAvgStats,
            sensorLogs: mockSensorLogs,
            sensorEvents: mockSensorEvents,
        };
        const mockStore = configureStore({
            reducer: reducer,
            preloadedState: modifiedState as any,
        });
        return render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <SensorDetailComponent />
                </MemoryRouter>
            </Provider>,
        );
    };

    test('Should have totalMessages, downTime, alerts in document', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(() => {
            expect(container.querySelector('#totalMessages').innerHTML).toBe(mockSensorDetails.overview.total_messages.toString())
            expect(container.querySelector('#downTime').innerHTML).toBe(mockSensorDetails.overview.down_time.toString())
            expect(container.querySelector('#alerts').innerHTML).toBe(mockSensorDetails.overview.alerts.toString())
        })
    });

    test('Should have sensorWeeklyStatsChart in document', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(() => {
            expect(container.querySelector('#sensorWeeklyStatsChart')).toBeInTheDocument()
        })
    });

    test('Should have sensorWeeklyAvgStatsChart in document', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(() => {
            expect(container.querySelector('#sensorWeeklyAvgStatsChart')).toBeInTheDocument()
        })
    });

    test('Should have systemLogRow and node length equal mock length', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(() => {
            expect(container.querySelectorAll('#systemLogRow').length).toBe(mockSensorLogs.length)
        })
    });

    test('Should have activityRow and node length equal mock length', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(() => {
            expect(container.querySelectorAll('#activityRow').length).toBe(mockSensorEvents.length)
        })
    });
});
