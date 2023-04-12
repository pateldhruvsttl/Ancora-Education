import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommonAcademic from './CommonAcademic'
import AcademicYearOneTable from './AcademicYearOneTable';
import Style from './FundingPlanStyle'
import IcnBottom from '../../assets/icons/IcnBottom'

interface props {
    academicDetail?: {}
    data: {}[]
    headerRow: {}
    isIcon?:boolean
}


function AcademicYearOne({ academicDetail, data, headerRow ,isIcon}: props) {
    return (
        <>
            <TableContainer component={Paper} sx={Style.acadOneYear}>
                <CommonAcademic academicDetail={academicDetail} Icon={IcnBottom} isSpaceDel={true} isIcon={isIcon}/>
                <AcademicYearOneTable data={data} headerRow={headerRow} />
            </TableContainer>
        </>
    )
}

export default AcademicYearOne