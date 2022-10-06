import { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { MerchantSidebar } from "../components";
import { MerchantDashboardRoutes } from "../routes";

export const MerchantDashboard = () => {
    const [title, setTitle] = useState('Merchant Dashboard');

    return (
        <main className="merchant-dashboard">
            <div className="dashboard__menu">
                <MerchantSidebar name="El Corral"></MerchantSidebar>
            </div>
            <div className="dashboard__content">
                <AppBar position="static" className="content__appbar">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MerchantDashboardRoutes setTitulo={setTitle}></MerchantDashboardRoutes>
            </div>
        </main>
    )
}
