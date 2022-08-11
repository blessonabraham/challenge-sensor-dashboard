import { configureStore } from '@reduxjs/toolkit';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ADD_SENSOR } from '../../Shared/Constants/Constants';
import reducer from '../../Store/Slice';
import { AddSensorComponent } from './AddSensorComponent';
import * as Actions from '../../Store/Actions';

describe('AddSensorComponent', () => {
    afterEach(cleanup);

    const renderWithStoreHistory = () => {
        const mockStore = configureStore({ reducer: reducer });
        return render(
            <Provider store={mockStore}>
                <MemoryRouter initialEntries={['/']}>
                    <AddSensorComponent />
                </MemoryRouter>
            </Provider>,
        );
    };

    test('Should New Sensor & Alerts Titles be in document', () => {
        const { getByText } = renderWithStoreHistory();
        expect(getByText(ADD_SENSOR.NEW_SENSOR)).toBeInTheDocument();
        expect(getByText(ADD_SENSOR.ALERTS)).toBeInTheDocument();
    });

    test('Should trigger add sensor action on "Add Sensor" button click', async () => {
        const addSensorAction = jest.spyOn(Actions, 'addSensorAction');
        const { getByText, container } = renderWithStoreHistory();
        await act(() => {
            fireEvent.change(container.querySelector('#sensorId'), {
                target: { value: 'sensorId' },
            });
        });
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
            fireEvent.click(getByText(ADD_SENSOR.ADD_SENSOR));
        });
        await waitFor(() =>
            expect(addSensorAction).toBeCalledWith({
                company_website: 'sensorId',
                device_id: 'sensorId',
                max_temp_limit: 10,
                min_temp_limit: 10,
                monitor_max_temp: false,
                monitor_min_temp: false,
            }),
        );
    });
});
