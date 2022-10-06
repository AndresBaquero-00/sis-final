import { Navigate, Route, Routes } from "react-router-dom";

export const CustomerRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<span>Customer Home</span>} />
            <Route path="/login" element={<span>Customer Login</span>} />
            <Route path="/signin" element={<span>Customer Signin</span>} />
            <Route path="/dashboard" element={<span>Customer Dashboard</span>} />

            <Route path="/*" element={<Navigate to="/customer" />} />
        </Routes>
    )
}