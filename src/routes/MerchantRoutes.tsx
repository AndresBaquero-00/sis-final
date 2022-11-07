import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MerchantService } from "../services";
import { MerchantHome } from "../app/home/pages";
import { MerchantDashboard } from "../app/dashboard/pages";

export const MerchantRoutes = () => {
    const merchantService = useMemo(() => new MerchantService(), []);

    return (
        <Routes>
            <Route path="/home" element={<MerchantHome />} />
            {
                merchantService.estaIniciado() 
                && <Route path="/dashboard/*" element={<MerchantDashboard />} /> 
            }

            <Route path="/*" element={<Navigate to="/merchant/home" />} />
        </Routes>
    )
}
