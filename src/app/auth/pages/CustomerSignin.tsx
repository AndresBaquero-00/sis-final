import { Button, TextField } from "@mui/material";

import { useForm, useTitle } from "../../../hooks";
import { CustomerAuth } from "../layouts";
import { illustrationRegister } from "../../../assets/images";

export const CustomerSignin = () => {
    useTitle('Registrarse');
    const { formState, onInputChange } = useForm({
        cedula: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log(formState);
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

            <Button className="button--global" 
                sx={{ borderRadius: '10px', marginTop: '10px' }} onClick={onSubmit}
            >
                Registrar
            </Button>
        </CustomerAuth>
    )
}
