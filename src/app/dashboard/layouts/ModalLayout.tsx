import { Close } from "@mui/icons-material";
import { Box, Grow, IconButton } from "@mui/material";

type Props = {
    openModal: boolean;
    closeModal: Function;
    children: JSX.Element | JSX.Element[];
}

export const ModalLayout = ({ openModal, closeModal, children }: Props) => {
    return (
        <Grow in={openModal}>
            <Box
                sx={{
                    width: '600px',
                    height: '100%',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px',
                    position: 'relative',
                    padding: '10px 50px'
                }}
            >
                <IconButton
                    size="large"
                    className="button--close"
                    onClick={() => closeModal()}
                >
                    <Close />
                </IconButton>
                {children}
            </Box>
        </Grow>
    )
}
