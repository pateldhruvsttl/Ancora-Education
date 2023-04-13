import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Style from './FundingFutureStyle'
import EvenTableCell from './EvenTableCell';
import OddTableCell from './OddTableCell';

interface props {
    data: {}[]
}
const isEven = (num: number) => ((num % 2) == 0);
export default function FinancialAid({ data }: props) {
    return (
        <TableContainer component={Paper} sx={Style.financialContainer}>
            <Table sx={Style.financialTable} aria-label="simple table">
                <TableHead>
                    <TableRow sx={Style.financialHeadCell}>
                        <TableCell style={{ ...Style.fundingType, ...Style.addBottomBorder }}>Funding Type</TableCell>
                        <TableCell style={{ ...Style.addBottomBorder }} align="left">Funding Type Descriptiton</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any, index) => (
                        isEven(index) ?
                            <EvenTableCell index={index} row={row} />
                            :
                            <OddTableCell index={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
