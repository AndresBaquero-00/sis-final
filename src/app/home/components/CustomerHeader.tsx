import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";

import { logo } from "../../../assets/images";

export const CustomerHeader = () => {
    return (
        <header className="customer-home__header">
            <div className="header__content">
                <div
                    className="header__logo"
                    style={{
                        backgroundImage: `url(${logo})`
                    }}
                ></div>
                <div className="header__actions">
                    <Button
                        startIcon={<Person />}
                        className="button--login"
                        size="large"
                        href="/customer/login"
                    >
                        Iniciar Sesión
                    </Button>
                    <Button
                        className="button--signin"
                        size="large"
                        href="/customer/signin"
                    >
                        Registrarse
                    </Button>
                </div>
            </div>
        </header>
    )
}
