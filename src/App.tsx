import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CustomerRoutes, MerchantRoutes } from "./routes";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/customer/*" element={<CustomerRoutes />} />
                <Route path="/merchant/*" element={<MerchantRoutes />} />

                <Route path="/*" element={<Navigate to="/customer" />} />
            </Routes>
        </BrowserRouter>
    )
}
