import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import Style from './FundingFutureStyle'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#EEF7FF',
        color: '#2B4574',
        fontSize: 12,
    },
}));


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
interface props {
    data: {
        firstValue?: string
        secondValue?: string
    }[]
}
export default function DirectLoanTable({ data }: props) {
    return (
        <Box sx={{ width: '60%' }}>
            <Table sx={{
                [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none",
                }
            }} aria-label="customized table">
                <TableHead>
                    <TableRow sx={Style.dirLoanHead}>
                        <StyledTableCell style={{...Style.directLoanHeader,...Style.dirLoanRiBorder}}>Direct Subsidized Loan)</StyledTableCell>
                        <StyledTableCell style={Style.directLoanHeader} align="left">Direct Subsidized Loan</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {data.map((row, index) => (
                        <TableRow key={index} sx={Style.dirLoanBodyBack}>
                            <TableCell style={{...Style.directLoanVal,...Style.dirLoanRiBorder}}>
                                {row.firstValue}
                            </TableCell>
                            <TableCell style={Style.directLoanVal} align="left">{row.secondValue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
