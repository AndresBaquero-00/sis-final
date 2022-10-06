import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import { useForm } from "../../../hooks";
import { CustomerAuth } from "../layouts";

export const CustomerSignin = () => {
    const { formState, onInputChange } = useForm({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log(formState);
    }

    return (
        <CustomerAuth
            title="Regístrate"
            bannerImage="https://minimals.cc/assets/illustrations/illustration_register.png"
            bannerTitle="¡Manage the job more effectively!"
            notAction={
                <span>
                    ¿Tienes una cuenta? &nbsp;
                    <Link to="/customer/login">Inicia sesión aquí.</Link>
                </span>
            }
        >
            <TextField onChange={onInputChange} value={formState.nombre} 
                name="nombre" label="Nombre" type="text" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.apellido} 
                name="apellido" label="Apellido" type="text" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.email} 
                name="email" label="Email" type="email" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.password} 
                name="password" label="Contraseña" type="password" variant="outlined" />

            <Button className="button--global" 
                sx={{ borderRadius: '10px', marginTop: '10px' }} onClick={onSubmit}
            >
                Registrar
            </Button>
        </CustomerAuth>
    )
}
