import { useState, useMemo } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";

import { CustomerService } from "../../../services";
import { useForm, useNavigate, useTitle } from "../../../hooks";
import { illustrationLogin } from "../../../assets/images";
import { CustomerAuth } from "../layouts";

export const CustomerLogin = () => {
    useTitle('Iniciar Sesión');
    const navigate = useNavigate();
    const customerService = useMemo(() => new CustomerService(), []);
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
        customerService.iniciarSesion(formState)
            .then(() => {
                navigate('/merchant/home');
            }).catch(error => {
                onResetForm();
                setConfigToast({
                    open: true,
                    message: String(error)
                });
            })
    }

    return (
        <CustomerAuth
            title="Inicia Sesión"
            bannerImage={illustrationLogin}
            bannerTitle="Hi, Welcome Back!"
            notAction={
                <span>
                    ¿Aún no te has registrado? &nbsp;
                    <a href="/customer/signin">Regístrate aquí.</a>
                </span>
            }
        >
            <TextField onChange={onInputChange} value={formState.email} 
                name="email" label="Correo Electrónico" type="email" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.password} 
                name="password" label="Contraseña" type="password" variant="outlined" />

            <Button className="button--global" 
                sx={{ borderRadius: '10px', marginTop: '10px' }} onClick={onSubmit}
            >
                Enviar
            </Button>

            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={closeToast}>
                <Alert onClose={closeToast} severity="error" sx={{ width: '100%' }}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </CustomerAuth>
    )
}