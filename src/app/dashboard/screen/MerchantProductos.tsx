import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

type Props = {
    setTitulo: Function;
}

export const MerchantProductos = ({ setTitulo }: Props) => {
    setTitulo('Productos');

    return (
        <section className="content__productos">
            <Fab aria-label="add" className="button--fab">
                <Add />
            </Fab>
        </section>
    )
}
