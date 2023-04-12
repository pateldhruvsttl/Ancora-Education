import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Style from './FundingPlanStyle'
import TableRowLastCell from './TableRowLastCell';
import TableRowOtherCell from './TableRowOtherCell';
import Dimention from '../../utils/Dimention';

interface props {
    data: {}[]
    headerRow: {
        one?: string
        two?: string
        three?: string
        four?: string
        five?: string
    }
}
function AcademicYearOneTable({ data,headerRow }: props) {
    const {width} = Dimention()
    // const getOneYearCell = () =>{
    //     if(width < 800)
    // }
    
    return (
        <Table sx={Style.acaOneYearContainer} aria-label="simple table">
            <TableHead sx={Style.acaOneYearHeader}>
                <TableRow>
                    <TableCell style={Style.oneYearTCellOne}></TableCell>
                    <TableCell style={Style.oneYearTCellTwo} align="center">{headerRow.one}</TableCell>
                    <TableCell style={Style.oneYearTCellTwo} align="center">{headerRow.two}</TableCell>
                    <TableCell style={Style.oneYearTCellTwo} align="center">{headerRow.three}</TableCell>
                    <TableCell style={Style.oneYearTCellThree} align="center">{headerRow.four}</TableCell>
                    <TableCell style={Style.oneYearTCellFour} align="center">{headerRow.five}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row: any, index) => (
                    index === data.length - 1 || index === data.length - 2
                        ?
                        <TableRowLastCell data={data} index={index} row={row} />
                        :
                        <TableRowOtherCell data={data} index={index} row={row} />
                ))}
            </TableBody>
        </Table>
    )
}

export default AcademicYearOneTable