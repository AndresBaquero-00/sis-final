import { Navigate, Route, Routes } from "react-router-dom";

export const MerchantRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<span>Merchant Home</span>} />

            <Route path="/*" element={<Navigate to="/merchant" />} />
        </Routes>
    )
}
