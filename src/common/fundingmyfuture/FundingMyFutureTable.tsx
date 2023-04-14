import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Style from './FundingMyFutureStyle';
import { fundingmyFutureData } from './FundingMyFutureData'
import MyFutureContent from './MyFutureContent';
import { getFirstStyle, getSecondStyle, getThirdStyle } from './GetDifferentStyle'

export default function FundingMyFutureTable() {

    return (
        <TableContainer component={Paper} sx={Style.myFutureTable}>
            <Table aria-label="simple table">
                <TableHead sx={Style.bottomBorder}>
                    <TableRow >
                        <TableCell style={{ ...Style.firstColumn, ...Style.removeSpace }}></TableCell>
                        <TableCell style={{ ...Style.secondColumn, ...Style.removeSpace }}>Academic Year 1 Estimated</TableCell>
                        <TableCell style={{ ...Style.thirdColumn, ...Style.removeSpace }} align="left">Full Program Cost</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fundingmyFutureData.map((row: any, index) => (
                        index === fundingmyFutureData.length - 2 ?
                            <MyFutureContent />
                            :
                            <TableRow sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}>
                                <TableCell sx={getFirstStyle(index)}>{row.leftData}</TableCell>
                                <TableCell sx={getSecondStyle(index)}>{row.academicEstimate}</TableCell>
                                <TableCell sx={getThirdStyle(index)}>{row.programCost}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
