import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Scrollbars from "react-custom-scrollbars";

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';






function Academics() {


    function createAcademicTable(
        survey: string,
    ) {
        return { survey }
    }

    const AcademicTable = [
        createAcademicTable('AM - High School GED Request'),
        createAcademicTable('AM - High School GED Request'),
        createAcademicTable('AM - High School GED Request'),
        createAcademicTable('AM - High School GED Request'),
        createAcademicTable('AM - High School GED Request'),
        createAcademicTable('AM - Transferability Form of Credits'),
        createAcademicTable('AM - Transferability Form of Credits'),
        createAcademicTable('AM - Placement Agreement'),
        createAcademicTable('AM - Placement Agreement'),
        createAcademicTable('AM - Background Check Pre'),
        createAcademicTable('AM - Background Check Pre'),
        createAcademicTable('AM - Background Check Pre'),
        createAcademicTable('AM - Background Check Pre'),
        createAcademicTable('AM - Background Check Tal'),
        createAcademicTable('AM - Background Check Tal'),
        createAcademicTable('AM - Background Check Tal'),
        createAcademicTable('AM - Background Check Tal'),
        createAcademicTable('AM - Background Check Tal'),
        createAcademicTable('AM - Student Release'),
        createAcademicTable('AM - Student Release'),
        createAcademicTable('AM - Felony Notice'),
        createAcademicTable('AM - Immunization Proof'),
        createAcademicTable('AM - Race-Ethnicity Disclosure Form'),
        createAcademicTable('AM - Race-Ethnicity Disclosure Form'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - Program Disclosure'),
        createAcademicTable('AM - DOT Examination Authorization Form'),
        createAcademicTable('AM - DOT Examination Authorization Form'),
        createAcademicTable('AM - DOT Examination Authorization Form'),
        createAcademicTable('AM - Drug and Alcohol Consent Form'),
        createAcademicTable('AM - Drug and Alcohol Consent Form'),
        createAcademicTable('AM - High School GED Request Online'),
        createAcademicTable('AM - High School GED Request Online'),
        createAcademicTable('AM - High School GED Request Online'),
        createAcademicTable('AM - ASR Notice of Availability'),
        createAcademicTable('AM - Student Portal Confirmation'),
        createAcademicTable('AM - Notice of Third Party Payers'),
        createAcademicTable('AM - Notice of Third Party Payers'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - Notice of Individual Counseling'),
        createAcademicTable('AM - TN Transfer of Credit'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies'),
        createAcademicTable('AM - TWC Receipt of Enrollment Policies Dental Assistant Acknowledgement OK '),
        createAcademicTable('AM - Criminal Background Screening DA Criminal History Evaluation TX '),
        createAcademicTable('AM - Background Check Release Auth '),
        createAcademicTable('AM - Background Check Release Auth '),
        createAcademicTable('AM - Drug and Alcohol Testing Consent v1'),
        createAcademicTable('AM - Drug and Alcohol Testing Consent v1'),
        createAcademicTable('AM - Drug and Alcohol Testing Consent v1'),
        createAcademicTable('AT- Third Party Self Authorization Form'),
        createAcademicTable('AT- Third Party Self Authorization Form'),
        createAcademicTable('AT- Third Party Self Authorization Form'),
        createAcademicTable('AT- Third Party Self Authorization Form'),
        createAcademicTable('ACT - DOT Examination FAQ'),
        createAcademicTable('AM - Verification of Tour'),
        createAcademicTable('AM - Verification of Tour'),
        createAcademicTable('AT - Third Party Self Auth Form CC'),
        createAcademicTable('AT - Third Party Self Auth Form CC'),
        createAcademicTable('HVAC - Notice of TDLR Registration'),
        createAcademicTable('HVAC - Notice of TDLR Registration'),
        createAcademicTable('HVAC - Notice of TDLR Registration'),
        createAcademicTable('AM - Veterans Affairs Program Disclosure'),
        createAcademicTable('AM - Veterans Affairs Program Disclosure'),
        createAcademicTable('ACT - CDL Program Disclosure'),
        createAcademicTable('ACT - CDL Program Disclosure'),
        createAcademicTable('AM - PreEmploy Authorization'),
        createAcademicTable('ACT - Third Party Self Authorization'),
        createAcademicTable('ACT - Third Party Self Authorization'),
        createAcademicTable('ACT - Third Party Self Authorization'),
        createAcademicTable('AHS - Student Acknowledgement'),
    ];




    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="#"
            onClick={handleClick}
        >
            My Academic
        </Link>,
        <Typography key="3" color="text.primary">
            Academic Completed Documents
        </Typography>,
    ];

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    return (
        <>
            <Box className="academicWrap">
                <Box className="breadCrumbWrap">
                    <Container maxWidth="xl">
                        <Stack spacing={2} className='MainBreadCrumbs'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="small" />}
                                aria-label="breadcrumb"
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Container>
                </Box>

                <Box className='alertGrp'>
                    <Alert severity="error"><Typography component="strong">Alert:</Typography >You have not completed the enrollment process. Complete your enrollment now!</Alert>
                </Box>

                <Box className="academicTableWrap">
                    <Container maxWidth="xl">
                        <Box className="academicTableInner">
                            <Box className="heading">
                                <Typography component="h3">
                                    Academic Completed Documents
                                </Typography>
                            </Box>
                            <TableContainer className="academicTable">
                                <Scrollbars className='cutomScroll' autoHide hideTracksWhenNotNeeded style={{ height: 1300, }}>
                                    <Table size="small" aria-label="a dense table">
                                        <TableHead>
                                            <TableRow className="tableHeading">
                                                <TableCell width={1300}>Document Type</TableCell>
                                                <TableCell width={150} align="center">Download</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {AcademicTable.map((row) => (
                                                <TableRow
                                                    key={row.survey}
                                                    className="tableContant"
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" vertical-align="top">
                                                        {row.survey}
                                                    </TableCell>
                                                    <TableCell align="center" vertical-align="top"><Link component="a" href='#'><FileDownloadOutlinedIcon />Download</Link></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Scrollbars>
                            </TableContainer>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
export default Academics;