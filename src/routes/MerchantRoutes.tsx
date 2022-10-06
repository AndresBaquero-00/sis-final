import { Navigate, Route, Routes } from "react-router-dom";
import { MerchantHome } from "../app/home/pages";
import { MerchantDashboard } from "../app/dashboard/pages";

export const MerchantRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<MerchantHome />} />
            <Route path="/dashboard/*" element={<MerchantDashboard />} />

            <Route path="/*" element={<Navigate to="/merchant/home" />} />
        </Routes>
    )
}
