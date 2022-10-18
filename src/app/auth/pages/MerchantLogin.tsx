import { MouseEvent } from "react";
import { Business, Paid, RestaurantMenu } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useForm } from "../../../hooks";

import { MerchantAuth } from "../layouts";

export const MerchantLogin = () => {

    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = (e: MouseEvent) => {
        // e.preventDefault();
        console.log(formState);
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
            <TextField onChange={onInputChange} value={formState.email} name="email" type="email"
                label="Correo Electrónico" fullWidth/>
            <TextField onChange={onInputChange} value={formState.password} name="password" type="password"
                label="Contraseña" fullWidth/>
            <Button
                className="button--global"
                onClick={onSubmit}
                href="/merchant/dashboard"
                sx={{ marginTop: '25px', borderRadius: '10px' }}
            >
                Enviar
            </Button>
        </MerchantAuth>
    )
}
