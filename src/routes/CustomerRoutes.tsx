import { Navigate, Route, Routes } from "react-router-dom";

import { CustomerLogin } from "../app/auth/pages";

export const CustomerRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<span>Customer Home</span>} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/signin" element={<span>Customer Signin</span>} />
            <Route path="/dashboard" element={<span>Customer Dashboard</span>} />

            <Route path="/*" element={<Navigate to="/customer" />} />
        </Routes>
    )
}