import { Button, TextField } from "@mui/material";

import { useForm } from "../../../hooks";
import { CustomerAuth } from "../layouts";
import { illustrationLogin } from "../../../assets/images";

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
        </CustomerAuth>
    )
}