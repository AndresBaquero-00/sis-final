import { useEffect } from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

import { List } from "../components";

type Props = {
    setTitulo: Function;
}

export const MerchantProductos = ({ setTitulo }: Props) => {
    useEffect(() => {
        setTitulo('Productos');
    });
    
    return (
        <section className="content__productos">
            <List
                header={['Seller', 'Product', 'Country', 'Total', 'Rank']}
                rows={
                    [
                        ['Jayvion Simon', 'CAP', 'Germany', '$16.19', 'Top 1'],
                        ['Lucian Obrien', 'Branded Shoes', 'UK', '$16.19', 'Top 2'],
                        ['Deja Brady', 'Headphone', 'France', '$16.19', 'Top 3'],
                    ]
                }
            ></List>

            <Fab aria-label="add" className="button--fab">
                <Add />
            </Fab>
        </section>
    )
}
