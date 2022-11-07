import { useMemo, useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Business, Paid, RestaurantMenu } from "@mui/icons-material";

import { useForm, useNavigate } from "../../../hooks";
import { MerchantService } from "../../../services";
import { MerchantAuth } from "../layouts";

export const MerchantLogin = () => {
    const navigate = useNavigate();
    const merchantService = useMemo(() => new MerchantService(), []);
    const { formState, onInputChange, onResetForm } = useForm({
        email: '',
        password: ''
    });
    const [configToast, setConfigToast] = useState({
        open: false,
        message: ''
    });
    const closeToast = () => {
        onResetForm();
        setConfigToast({
            open: false,
            message: ''
        });
    }
    const onSubmit = () => {
        merchantService.iniciarSesion(formState)
        .then(() => {
            navigate('/merchant/dashboard');
        }).catch(error => {
            setConfigToast({
                open: true,
                message: String(error)
            });
        });
    }

    if (merchantService.estaIniciado()) {
        navigate('/merchant/dashboard');
        return (
            <>
            </>
        );
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
            <Button className="button--global"
                sx={{ marginTop: '25px', borderRadius: '10px' }} onClick={onSubmit}
            >
                Enviar
            </Button>

            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={closeToast}>
                <Alert onClose={closeToast} severity="error" sx={{ width: '100%' }}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </MerchantAuth>
    )
}
