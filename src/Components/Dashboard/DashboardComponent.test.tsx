import { configureStore } from '@reduxjs/toolkit';
import { cleanup, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { SENSOR_DASHBOARD } from '../../Shared/Constants/Constants';
import reducer, { initialState } from '../../Store/Slice';
import { DashboardComponent } from './DashboardComponent';
import mockAxios from 'jest-mock-axios';
import { mockSensorList, mockSensorStats } from '../../Shared/Mocks/Mocks';
import * as Actions from '../../Store/Actions';

describe('DashboardComponent', () => {
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
            sensorStats: mockSensorStats,
            sensorList: mockSensorList,
        };
        const mockStore = configureStore({
            reducer: reducer,
            preloadedState: modifiedState as any,
        });
        return render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardComponent />
                </MemoryRouter>
            </Provider>,
        );
    };

    test('Should totalSensors, openAlerts & totalCustomers be in document', () => {
        const { container } = renderWithStoreHistory();
        expect(container.querySelector('#totalSensors').innerHTML).toBe('182');
        expect(container.querySelector('#openAlerts').innerHTML).toBe('2');
        expect(container.querySelector('#totalCustomers').innerHTML).toBe('14');
    });

    test('Should sensorTempratureChart be in document', async () => {
        const fetchSensorStatsAction = jest.spyOn(
            Actions,
            'fetchSensorStatsAction',
        );
        const { container } = renderWithStoreHistory();
        await waitFor(() => expect(fetchSensorStatsAction).toBeCalled());
        await waitFor(() => {
            expect(
                container.querySelector('#sensorTempratureChart'),
            ).toBeInTheDocument();
        });
    });

    test('Should have sensorListRow and its node length equal to mock', async () => {
        const fetchSensorListAction = jest.spyOn(
            Actions,
            'fetchSensorListAction',
        );
        const { container } = renderWithStoreHistory();
        await waitFor(() => expect(fetchSensorListAction).toBeCalled());
        await waitFor(() => {
            expect(container.querySelectorAll('#sensorListRow').length).toBe(
                mockSensorList.results.length,
            );
        });
    });
});
