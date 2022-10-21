import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type Props = {
    title: string;
    header: string[];
    rows: string[][];
    posImages?: number;
}

export const List = ({ title, header, rows, posImages }: Props) => {
    return (
        <div className="list">
            <h1 className="list__title">{ title }</h1>
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
                                        row.map((column, index) => (
                                            <TableCell align="left" className="table__cell-body">
                                                {
                                                    posImages && index === posImages 
                                                    ? <img src={column} alt="foto" />:column
                                                }
                                            </TableCell>
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
