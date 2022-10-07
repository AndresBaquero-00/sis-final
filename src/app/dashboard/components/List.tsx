import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type Props = {
    header: string[];
    rows: string[][];
}

export const List = ({ header, rows }: Props) => {
    return (
        <div className="list">
            <h1 className="list__title">Productos Registrados</h1>
            <TableContainer component="div">
                <Table className="list__table">
                    <TableHead>
                        <TableRow>
                            {
                                header.map(head => (
                                    <TableCell align="left" className="table__cell-head">{head}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row => (
                                <TableRow>
                                    {
                                        row.map(column => (
                                            <TableCell align="left" className="table__cell-body">{column}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
