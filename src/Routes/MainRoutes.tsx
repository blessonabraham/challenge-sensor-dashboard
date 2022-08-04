import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddSensorComponent } from "../Components/AddSensor/AddSensorComponent"
import { DashboardComponent } from "../Components/Dashboard/DashboardComponent"
import { EditSensorComponent } from "../Components/EditSensor/EditSensorComponent"
import { SensorDetailComponent } from "../Components/SensorDetail/SensorDetailComponent"
import { HeaderAndMenu } from "../Shared/HeaderAndMenu/HeaderAndMenu"

const TheRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardComponent />} />
                <Route path="/add-sensor" element={<AddSensorComponent />} />
                <Route path="/edit-sensor" element={<EditSensorComponent />} />
                <Route path="/sensor-detail" element={<SensorDetailComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export const MainRoutes = HeaderAndMenu(TheRoutes)