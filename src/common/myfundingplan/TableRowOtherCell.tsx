import React from 'react'
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Style from './FundingPlanStyle'
import Dimention from '../../utils/Dimention';

interface props {
    data: {}[]
    index: number
    row: {
        name: string,
        netAmountOne: string,
        netAmountTwo: string,
        netAmountThree: string,
        totalNetAmount?: string,
        grossAmount?: string,
    }
}
function TableRowOtherCell({ data, index, row }: props) {
    const {width} = Dimention()
    const getStyle = () => {
        if(width < 1066 && width >= 320){
            return {...Style.tutionAndFees as React.CSSProperties,...Style.tutionAndFeesMob as React.CSSProperties}
        }
        else{
            return Style.tutionAndFees as React.CSSProperties
        }
    }
    return (
        <TableRow
            key={row.name}
        >
            <TableCell style={getStyle()}>{row.name}</TableCell>
            <TableCell align="center" style={Style.netAmountOne as React.CSSProperties}>{row.netAmountOne}</TableCell>
            <TableCell align="center" style={Style.netAmountOne as React.CSSProperties}>{row.netAmountTwo}</TableCell>
            <TableCell align="center" style={Style.netAmountOne as React.CSSProperties}>{row.netAmountThree}</TableCell>
            <TableCell align="center" style={Style.netAmountOne as React.CSSProperties}>{row.totalNetAmount}</TableCell>
            <TableCell align="center" style={Style.netAmountOne as React.CSSProperties}>{row.grossAmount}</TableCell>
        </TableRow>
    )
}

export default TableRowOtherCell