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

export const MerchantProductos = ({ setTitulo }: Props) => {

    const [modal, setModal] = useState(false);
    const [nombreArchivo, setNombreArchivo] = useState('No hay archivos seleccionados');
    const { formState, onInputChange, onResetForm } = useForm({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: {} as File
    });

    useEffect(() => {
        setTitulo('Productos');
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
                title="Productos Registrados"
                header={['Nombre', 'Descripción', 'Precio', 'Imagen']}
                posImages={3}
                rows={
                    [
                        ['Corral Todoterreno Clásica', 'Hamburguesa de dos carnes de 125 g cada una de res a la parrilla con salsa BBQ, queso tipo mozzarella, lechuga, tomate, cebolla, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$35.500', 'https://images.rappi.com/products/2094628730-1648486366377.jpg?e=webp&d=800x800&q=80'],
                        ['Vaquero Especial', 'Perro caliente con salchicha a la parrilla, queso tipo mozzarella, tocineta, papa callejera, cebolla picada, salsa blanca, salsa de tomate y mostaza en pan perro', '$31.500', 'https://images.rappi.com/products/2093138497-1664837538855.jpg?e=webp&d=800x800&q=80'],
                        ['Corral Callejera', 'Hamburguesa de 125 g de carne 100% de res, una tajada de queso tipo mozzarella, papas callejera, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$22.000', 'https://images.rappi.com/products/2089983118-1643732108230.jpg?e=webp&d=800x800&q=80'],
                        ['Corral Todoterreno Clásica', 'Hamburguesa de dos carnes de 125 g cada una de res a la parrilla con salsa BBQ, queso tipo mozzarella, lechuga, tomate, cebolla, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$35.500', 'https://images.rappi.com/products/2094628730-1648486366377.jpg?e=webp&d=800x800&q=80'],
                        ['Vaquero Especial', 'Perro caliente con salchicha a la parrilla, queso tipo mozzarella, tocineta, papa callejera, cebolla picada, salsa blanca, salsa de tomate y mostaza en pan perro', '$31.500', 'https://images.rappi.com/products/2093138497-1664837538855.jpg?e=webp&d=800x800&q=80'],
                        ['Corral Callejera', 'Hamburguesa de 125 g de carne 100% de res, una tajada de queso tipo mozzarella, papas callejera, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$22.000', 'https://images.rappi.com/products/2089983118-1643732108230.jpg?e=webp&d=800x800&q=80'],
                        ['Corral Todoterreno Clásica', 'Hamburguesa de dos carnes de 125 g cada una de res a la parrilla con salsa BBQ, queso tipo mozzarella, lechuga, tomate, cebolla, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$35.500', 'https://images.rappi.com/products/2094628730-1648486366377.jpg?e=webp&d=800x800&q=80'],
                        ['Vaquero Especial', 'Perro caliente con salchicha a la parrilla, queso tipo mozzarella, tocineta, papa callejera, cebolla picada, salsa blanca, salsa de tomate y mostaza en pan perro', '$31.500', 'https://images.rappi.com/products/2093138497-1664837538855.jpg?e=webp&d=800x800&q=80'],
                        ['Corral Callejera', 'Hamburguesa de 125 g de carne 100% de res, una tajada de queso tipo mozzarella, papas callejera, salsa blanca, salsa de tomate y mostaza en pan ajonjolí', '$22.000', 'https://images.rappi.com/products/2089983118-1643732108230.jpg?e=webp&d=800x800&q=80'],
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
                            <h1 className="dashboard__form-title">Ingresar un nuevo producto</h1>
                            <TextField name="nombre" type="text" className="dashboard__form-textfield"
                                label="Nombre del Producto" value={formState.nombre}
                                onChange={onInputChange} fullWidth />
                            <TextField name="descripcion" type="text" className="dashboard__form-textfield"
                                rows="5" label="Descripción del Producto" multiline
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
                                    label="Precio del Producto" value={formState.precio}
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
