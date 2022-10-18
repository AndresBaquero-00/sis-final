import { CheckCircle } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

import { useForm } from "../../../hooks";
import { MerchantAuth } from "../layouts";

export const MerchantBegin = () => {

    const { formState, onInputChange } = useForm({
        NIT: '',
        nombre: '',
        direccion: '',
        especialidad: '',
        telefono: '',
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log(formState);
    }

    return (
        <MerchantAuth
            title="¡Únete ahora y haz crecer las ventas de tu restaurante!"
            bannerImage="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            bannerInfo={
                <>
                    <h1 className="info__title">Registra tu restaurante</h1>
                    <p  className="info__desc">Recibe además otros beneficios cómo:</p>
                    <ul className="info__list">
                        <li className="info__list-item">
                            <CheckCircle />
                            Inscripción sin costo.
                        </li>
                        <li className="info__list-item">
                            <CheckCircle />
                            Crear tu menú con nuestra ayuda o editarlo siempre que quieras.
                        </li>
                        <li className="info__list-item">
                            <CheckCircle />
                            Aumentar tus ventas hasta un 30%, sin mayores costos operativos.
                        </li>
                    </ul>
                </>
            }
        >
            <TextField onChange={onInputChange} value={formState.NIT} name="NIT" type="number"
                label="NIT *" variant="outlined" fullWidth />
            <TextField onChange={onInputChange} value={formState.nombre} name="nombre" type="text"
                label="Nombre del Restaurante *" variant="outlined" fullWidth />
            <TextField onChange={onInputChange} value={formState.direccion} name="direccion" type="text"
                label="Dirección del Restaurante *" variant="outlined" fullWidth />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px'
                }}
            >
                <TextField onChange={onInputChange} value={formState.especialidad} name="especialidad" type="text"
                    label="Especialidad *" variant="outlined" fullWidth />
                <TextField onChange={onInputChange} value={formState.telefono} name="telefono" type="number"
                    label="Teléfono *" variant="outlined" fullWidth />
            </Box>
            <TextField onChange={onInputChange} value={formState.email} name="email" type="email"
                label="Correo Electrónico *" variant="outlined" fullWidth />
            <TextField onChange={onInputChange} value={formState.password} name="password" type="password"
                label="Contraseña *" variant="outlined" fullWidth />
            <Button
                className="button--global"
                sx={{ marginTop: '25px', borderRadius: '10px' }} onClick={onSubmit}
            >
                Enviar
            </Button>
        </MerchantAuth>
    )
}
