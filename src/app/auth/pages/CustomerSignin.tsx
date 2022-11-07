import { useMemo, useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";

import { useForm, useNavigate, useTitle } from "../../../hooks";
import { CustomerService } from "../../../services";
import { illustrationRegister } from "../../../assets/images";
import { CustomerAuth } from "../layouts";

export const CustomerSignin = () => {
    useTitle('Registrarse');
    const navigate = useNavigate();
    const customerService = useMemo(() => new CustomerService(), []);
    const { formState, onInputChange, isInvalidForm, onResetForm } = useForm({
        cedula: '',
        nombre: '',
        apellido: '',
        telefono: '',
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
        const customer = customerService.parse(formState);
        customerService.registrar(customer)
            .then(() => {
                navigate('/customer/home');
            }).catch(error => {
                onResetForm();
                setConfigToast({
                    open: true,
                    message: String(error)
                });
            });
    }

    return (
        <CustomerAuth
            title="Regístrate"
            bannerImage={illustrationRegister}
            bannerTitle="¡Manage the job more effectively!"
            notAction={
                <span>
                    ¿Tienes una cuenta? &nbsp;
                    <a href="/customer/login">Inicia sesión aquí.</a>
                </span>
            }
        >
            <TextField onChange={onInputChange} value={formState.cedula}
                name="cedula" label="Cédula" type="number" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.nombre}
                name="nombre" label="Nombre" type="text" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.apellido}
                name="apellido" label="Apellido" type="text" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.telefono}
                name="telefono" label="Teléfono" type="number" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.email}
                name="email" label="Email" type="email" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.password}
                name="password" label="Contraseña" type="password" variant="outlined" />

            <Button className="button--global" disabled={isInvalidForm}
                sx={{ borderRadius: '10px', marginTop: '10px' }} onClick={onSubmit}
            >
                Registrar
            </Button>

            <Snackbar open={configToast.open} autoHideDuration={2500} onClose={closeToast}>
                <Alert onClose={closeToast} severity="error" sx={{ width: '100%' }}>
                    {configToast.message}
                </Alert>
            </Snackbar>
        </CustomerAuth>
    )
}
