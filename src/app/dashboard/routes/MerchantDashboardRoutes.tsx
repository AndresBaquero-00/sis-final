import { Navigate, Route, Routes } from "react-router-dom";

import { buildRoute } from "../pipes";
import { MerchantProductos } from "../screen";

type Props = {
    setTitulo: Function;
}

export const MerchantDashboardRoutes = ({ setTitulo }: Props) => {
    return (
        <Routes>
            <Route path="/productos" element={<MerchantProductos setTitulo={setTitulo} />} />

            <Route path="/*" element={<Navigate to={buildRoute('/productos')} />} />
        </Routes>
    )
}
