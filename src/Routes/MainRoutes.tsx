import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddSensorComponent } from '../Components/AddSensor/AddSensorComponent';
import { DashboardComponent } from '../Components/Dashboard/DashboardComponent';
import { EditSensorComponent } from '../Components/EditSensor/EditSensorComponent';
import { SensorDetailComponent } from '../Components/SensorDetail/SensorDetailComponent';
import { FrameHOC } from '../Shared/HOC/FrameHOC';

const FramedRoutes = FrameHOC(() => (
    <Routes>
        <Route path='/' element={<DashboardComponent />} />
        <Route path='/add-sensor' element={<AddSensorComponent />} />
        <Route path='/edit-sensor/:sensorId' element={<EditSensorComponent />} />
        <Route
            path='/sensor-detail/:sensorId'
            element={<SensorDetailComponent />}
        />
    </Routes>
));

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <FramedRoutes />
        </BrowserRouter>
    );
};
