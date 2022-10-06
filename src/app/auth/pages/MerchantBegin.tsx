import { CheckCircle } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { MerchantAuth } from "../layouts";

export const MerchantBegin = () => {
    return (
        <MerchantAuth
            title="¡Únete ahora y haz crecer las ventas de tu restaurante!"
            bannerImage="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            bannerInfo={
                <>
                    <h1 className="info__title">Registra tu restaurante</h1>
                    <p className="info__desc">Recibe además otros beneficios cómo:</p>
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
            <TextField
                label="Nombre del Restaurante *"
                className="form__content-textfield"
            />
            <TextField
                label="Dirección del Restaurante *"
            />
            <TextField
                label="Especialidad"
                fullWidth
            />
            <div
                className="form__content-name"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <TextField
                    label="Nombre(s) *"
                    fullWidth
                />
                <TextField
                    label="Apellido(s) *"
                    fullWidth
                />
            </div>
            <TextField
                label="Correo Electrónico *"
                fullWidth
            />
            <TextField
                label="Contraseña *"
                fullWidth
            />
            <Button
                variant="contained"
                size="large"
                className="button--global"
                sx={{ marginTop: '25px', borderRadius: '10px' }}
            >
                Enviar
            </Button>
        </MerchantAuth>
    )
}
