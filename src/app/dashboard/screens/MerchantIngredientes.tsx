import React, { useEffect, useState } from "react";
import { Box, Button, Fab, IconButton, Modal, TextField } from "@mui/material";
import { Add, PhotoCamera } from "@mui/icons-material";

import { useForm } from "../../../hooks";
import { cutText } from "../pipes";
import { List } from "../components";
import { ModalLayout } from "../layouts";

type Props = {
    setTitulo: Function;
}

export const MerchantIngredientes = ({ setTitulo }: Props) => {
    const [modal, setModal] = useState(false);
    const [nombreArchivo, setNombreArchivo] = useState('No hay archivos seleccionados');
    const { formState, onInputChange, onResetForm } = useForm({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: {} as File
    });

    useEffect(() => {
        setTitulo('Ingredientes');
    });

    const closeModal = () => {
        onResetForm();
        setModal(false);
    }

    const onSubmit = ($e: React.FormEvent) => {
        $e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="content__productos">
            <List
                title="Ingredientes Registrados"
                header={['Nombre', 'Descripción', 'Precio', 'Imagen']}
                posImages={3}
                rows={
                    [
                        ['Cebolla', '5 rodajas de cebolla morada encurtida.', '$6.500', 'https://kreef.com/wp-content/uploads/2020/07/cebolla-morada-curtida.jpg'],
                        ['Carne 150g', 'Carne de res a la parrilla.', '$11.000', 'https://thumbs.dreamstime.com/b/carne-recientemente-asada-la-parrilla-de-hamburguesa-117778726.jpg'],
                        ['Tocineta', 'Porción de tocineta de 50g.', '$8.000', 'https://bootlaceinc.com/wp-content/uploads/2021/04/Tocino.png'],
                    ]
                }
            ></List>

            <Fab aria-label="add" className="button--fab" onClick={() => setModal(true)}>
                <Add />
            </Fab>

            <Modal
                open={modal}
                onClose={closeModal}
                classes={{
                    root: 'dashboard__modal'
                }}
            >
                <Box
                    sx={{
                        height: '90%',
                        maxHeight: '800px',
                    }}
                >
                    <ModalLayout openModal={modal} closeModal={closeModal}>
                        <form onSubmit={onSubmit}>
                            <h1 className="dashboard__form-title">Ingresar un nuevo ingrediente</h1>
                            <TextField name="nombre" type="text" className="dashboard__form-textfield"
                                label="Nombre del Ingrediente" value={formState.nombre}
                                onChange={onInputChange} fullWidth />
                            <TextField name="descripcion" type="text" className="dashboard__form-textfield"
                                rows="5" label="Descripción del Ingrediente" multiline
                                value={formState.descripcion} onChange={onInputChange} fullWidth />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '15px'
                                }}
                            >
                                <TextField name="precio" sx={{ flex: '1' }} type="number" className="dashboard__form-textfield"
                                    label="Precio del Ingrediente" value={formState.precio}
                                    onChange={onInputChange} fullWidth />
                                <IconButton className="button--upload" sx={{ flex: '1' }} aria-label="Cargar Fotografía" component="label">
                                    <PhotoCamera />
                                    <input
                                        onChange={(uploadButton) => {
                                            const files = uploadButton.currentTarget.files;
                                            if (files) {
                                                const file = files?.item(0) as File;
                                                setNombreArchivo(file.name);
                                                onInputChange(uploadButton, true);
                                            }
                                        }}
                                        name="imagen"
                                        hidden
                                        accept="image/*"
                                        type="file"
                                    />
                                    <p>{cutText(nombreArchivo)}</p>
                                </IconButton>
                            </Box>

                            <Button
                                className="button--global"
                                sx={{ marginTop: '25px', borderRadius: '10px', width: '100%' }}
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </form>
                    </ModalLayout>
                </Box>
            </Modal>
        </section>
    )
}
