import { Button } from "@mui/material";
import { Store } from "@mui/icons-material";

import { logo } from "../../../assets/images";

type Props = {
    action: Function;
}

export const MerchantHeader = ({ action }: Props) => {
    return (
        <header className="merchant-home__header">
            <div
                className="header__logo"
                style={{
                    backgroundImage: `url(${logo})`
                }}
            ></div>
            <div className="header__menu">
                <ul className="header__menu-list">
                    <Button className="header__menu-item" href="/merchant">Inicio</Button>
                    <Button className="header__menu-item" href="#beneficios">Beneficios</Button>
                    <Button className="header__menu-item" href="#funcionamos">Cómo Funcionamos</Button>
                    <Button className="header__menu-item" href="#contacto">Contacto</Button>
                </ul>
            </div>
            <div className="header__actions">
                <Button
                    className="button--round button--login"
                    startIcon={<Store />}
                    onClick={() => action('login')}
                >
                    Iniciar Sesión
                </Button>
                <Button
                    className="button--round button--begin"
                    onClick={() => action('begin')}
                >
                    Comenzar
                </Button>
            </div>
        </header>
    )
}
