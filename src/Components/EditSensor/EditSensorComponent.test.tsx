import { configureStore } from '@reduxjs/toolkit';
import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {
    EDIT_SENSOR,
    SENSOR_DASHBOARD,
} from '../../Shared/Constants/Constants';
import reducer, { initialState } from '../../Store/Slice';
import {
    mockSensorDetails,
    mockSensorList,
    mockSensorStats,
} from '../../Shared/Mocks/Mocks';
import { EditSensorComponent } from './EditSensorComponent';
import * as Actions from '../../Store/Actions';

describe('EditSensorComponent', () => {
    afterEach(() => {
        cleanup;
    });

    const renderWithStoreHistory = () => {
        const modifiedState = {
            ...initialState,
            sensorDetails: mockSensorDetails,
        };
        const mockStore = configureStore({
            reducer: reducer,
            preloadedState: modifiedState as any,
        });
        return render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <EditSensorComponent />
                </MemoryRouter>
            </Provider>,
        );
    };

    test('Should have editSensor title in document', () => {
        const { getByText } = renderWithStoreHistory();
        expect(getByText(EDIT_SENSOR.EDIT_SENSOR)).toBeInTheDocument();
    });

    test('Should have sensorId in document', async () => {
        const { container } = renderWithStoreHistory();
        await waitFor(()=>{
            expect(container.querySelector('#sensorId').innerHTML).toBe(mockSensorDetails.device_id);
        })
    });

    test('Should trigger submit action on "Submit" button click', async () => {
        const updateSensorAction = jest.spyOn(Actions, 'updateSensorAction');
        const { getByText, container } = renderWithStoreHistory();
        await act(() => {
            fireEvent.change(container.querySelector('#location'), {
                target: { value: 'location' },
            });
        });
        await act(() => {
            fireEvent.change(container.querySelector('#minTempThreshold'), {
                target: { value: '10' },
            });
        });
        await act(() => {
            fireEvent.change(container.querySelector('#maxTempThreshold'), {
                target: { value: '10' },
            });
        });
        await act(() => {
            fireEvent.click(getByText(EDIT_SENSOR.UPDATE_SENSOR));
        });
        await waitFor(() =>
            expect(updateSensorAction).toBeCalledWith({
                company_website: mockSensorDetails.device_id,
                device_id: mockSensorDetails.device_id,
                max_temp_limit: 10,
                min_temp_limit: 10,
                monitor_max_temp: false,
                monitor_min_temp: false,
            }),
        );
    });

    test('Should trigger delete action on "Delete Sensor" click', async () => {
        const deleteSensorAction = jest.spyOn(Actions, 'deleteSensorAction');
        const { getByText } = renderWithStoreHistory();
        await act(() => {
            fireEvent.click(getByText(EDIT_SENSOR.DELETE_SENSOR));
        });
        await waitFor(() =>
            expect(deleteSensorAction).toBeCalledWith(mockSensorDetails.device_id),
        );
    });
});
