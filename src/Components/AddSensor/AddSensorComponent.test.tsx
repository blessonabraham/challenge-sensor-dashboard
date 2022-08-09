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

    test('Should render AddSensorComponent', () => {
        const { container } = renderWithStoreHistory();
        expect(container).toBeInTheDocument();
    });

    test('Should check for titles', () => {
        const { getByText } = renderWithStoreHistory();
        expect(getByText(ADD_SENSOR.NEW_SENSOR)).toBeInTheDocument();
        expect(getByText(ADD_SENSOR.ALERTS)).toBeInTheDocument();
    });

    test('Should check for Input fields', () => {
        const { container } = renderWithStoreHistory();
        expect(container.querySelector('#sensorId')).toBeInTheDocument();
    });

    test('Should add the sensor on "Add Sensor" button click', async () => {
        const addSensorAction = jest.spyOn(Actions, 'addSensorAction');
        const { getByText } = renderWithStoreHistory();
        await act(() => {
            fireEvent.click(getByText(ADD_SENSOR.ADD_SENSOR));
        });
       await waitFor(() => expect(addSensorAction).toBeCalled())
    });
});
