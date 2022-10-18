import { useEffect, useState } from "react";
import { Box, Fab, Grow, Modal } from "@mui/material";
import { Add } from "@mui/icons-material";

import { List } from "../components";

type Props = {
    setTitulo: Function;
}

export const MerchantProductos = ({ setTitulo }: Props) => {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        setTitulo('Productos');
    });
    
    return (
        <section className="content__productos">
            <List
                title="Productos Registrados"
                header={['Seller', 'Product', 'Country', 'Total', 'Rank']}
                rows={
                    [
                        ['Jayvion Simon', 'CAP', 'Germany', '$16.19', 'Top 1'],
                        ['Lucian Obrien', 'Branded Shoes', 'UK', '$16.19', 'Top 2'],
                        ['Deja Brady', 'Headphone', 'France', '$16.19', 'Top 3'],
                    ]
                }
            ></List>

            <Fab aria-label="add" className="button--fab" onClick={() => setModal(true)}>
                <Add />
            </Fab>

            <Modal
                open={modal}
                onClose={() => setModal(false)}
                classes={{
                    root: 'dashboard__modal'
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        height: '90%',
                        maxHeight: '800px',
                    }}
                >
                    <Grow in={modal}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'white'
                            }}
                        >
                            <form>
                                
                            </form>
                        </Box>
                    </Grow>
                </Box>
            </Modal>
        </section>
    )
}
