import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Style from './FundingFutureStyle'

interface props {
    row: {
        fundingType: string
        fundingDesc: string
    }
    index: number
}
function EvenTableCell({ row, index }: props) {
    return (
        <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell style={{ ...Style.fundingType, ...Style.evenCell, }} align="left">
                {row.fundingType}
            </TableCell>
            <TableCell style={{ ...Style.evenCell }} align="left">{row.fundingDesc}</TableCell>
        </TableRow>
    )
}

export default EvenTableCell