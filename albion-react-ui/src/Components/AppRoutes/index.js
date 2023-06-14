import {Route, Routes} from 'react-router-dom'

import Dashboard from "../../Pages/Dashboard"
import Deals from "../../Pages/Deals"
import Orders from "../../Pages/Orders"

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/deals' element={<Deals />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
        </Routes>
    );
}

export default AppRoutes;