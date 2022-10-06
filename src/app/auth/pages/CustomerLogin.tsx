import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import { useForm } from "../../../hooks";
import { CustomerAuth } from "../layouts";

export const CustomerLogin = () => {
    const { formState, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log(formState);
    }

    return (
        <CustomerAuth
            title="Inicia Sesión"
            bannerImage="https://minimals.cc/assets/illustrations/illustration_login.png"
            bannerTitle="Hi, Welcome Back!"
            notAction={
                <span>
                    ¿Aún no te has registrado? 
                    <Link to="/customer/signin">Regístrate aquí.</Link>
                </span>
            }
        >
            <TextField onChange={onInputChange} value={formState.email} 
                name="email" label="Correo Electrónico" type="email" variant="outlined" />
            <TextField onChange={onInputChange} value={formState.password} 
                name="password" label="Contraseña" type="password" variant="outlined" />

            <Button className="button--global" onClick={onSubmit}>
                Enviar
            </Button>
        </CustomerAuth>
    )
}