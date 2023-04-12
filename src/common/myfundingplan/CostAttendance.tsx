import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import { Typography } from '@mui/material';
import Style from './FundingPlanStyle';
import Dimention from '../../utils/Dimention';

function createData(
    name: string,
    calories: string,
) {
    return { name, calories };
}

const rows = [
    createData('Tuition and Fees*', '$32,242.00'),
    createData('Room and Board**', '$17,708.00'),
    createData('Transportation**', '$0.00'),
    createData('Personal Expenses**', '$5,566.00'),
];

export default function CostAttendance() {
    const {width} = Dimention()
    return (
        <>
        <Typography sx={Style.costAttendance}>Cost of Attendance</Typography>
        <TableContainer component={Paper} sx={Style.tableContainer}>
            <Table aria-label="simple table" >
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" sx={Style.tableValLeft}>
                                {row.name}
                            </TableCell>
                            <TableCell sx={Style.tableValRight} align="right">{row.calories}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell style={Style.footerVal}>Total Cost of Attendance (COA)</TableCell>
                        <TableCell style={Style.footerVal} align="right">$32,242.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    );
}
