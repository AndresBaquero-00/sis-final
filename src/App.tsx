import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./app/error/pages";
import { CustomerRoutes, MerchantRoutes } from "./routes";

import "swiper/css";
import 'swiper/css/bundle';
import "swiper/css/pagination";
import "swiper/css/navigation";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/customer/*" element={<CustomerRoutes />} />
                <Route path="/merchant/*" element={<MerchantRoutes />} />
                <Route path="/404" element={<Error404 />}></Route>

                <Route path="/*" element={<Navigate to="/customer" />} />
            </Routes>
        </BrowserRouter>
    )
}
