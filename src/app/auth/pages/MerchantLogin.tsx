import { Business, Paid, RestaurantMenu } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

import { MerchantAuth } from "../layouts";

export const MerchantLogin = () => {
    const sendData = () => {
        const navigate = document.createElement('a');
        navigate.href = '/merchant/dashboard';

        navigate.click();
    }

    return (
        <MerchantAuth
            title="Inicia Sesión"
            bannerImage="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            bannerInfo={
                <>
                    <h1 className="info__title">¡Bienvenido! Portal Partners</h1>
                    <ul className="info__list">
                        <li className="info__list-item">
                            <Paid />
                            Gestiona tus pagos.
                        </li>
                        <li className="info__list-item">
                            <Business />
                            Administra tus negocios.
                        </li>
                        <li className="info__list-item">
                            <RestaurantMenu />
                            Crea y edita menús.
                        </li>
                    </ul>
                </>
            }
        >
            <TextField label="Correo Electrónico" />
            <TextField label="Contraseña" />
            <Button
                variant="contained"
                size="large"
                className="button--global"
                onClick={sendData}
                sx={{ marginTop: '25px', borderRadius: '10px' }}
            >
                Enviar
            </Button>
        </MerchantAuth>
    )
}
