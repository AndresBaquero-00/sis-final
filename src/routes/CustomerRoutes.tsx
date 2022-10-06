import { Navigate, Route, Routes } from "react-router-dom";

import { CustomerLogin, CustomerSignin } from "../app/auth/pages";
import { CustomerHome } from "../app/home/pages";

export const CustomerRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<CustomerHome />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/signin" element={<CustomerSignin />} />
            <Route path="/dashboard" element={<span>Customer Dashboard</span>} />

            <Route path="/*" element={<Navigate to="/customer/home" />} />
        </Routes>
    )
}