import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';

import TableRow from '@mui/material/TableRow';
import Scrollbars from "react-custom-scrollbars";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';





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
        My Academics
    </Link>,
    <Typography key="3" color="text.primary">
        My Academic Account
    </Typography>,
];

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


function createAcademinTable(
    program: string,
    startDate: string,
    schoolStatus: string,
    enrollStatus: string,
    shift: string,
    credit: string,
    completed: string,
    gpa: string,
) {
    return { program, startDate, schoolStatus, enrollStatus, shift, credit, completed, gpa };
}

const academicDataTable = [
    createAcademinTable('AAS Business Administration', " 10 / 17 / 2022", "AAS Business Administration", "Full Time", "Online Track I", "$ 92.00", "$ 0.00", "$ 0.00"),
];



function createFooterData1(
    totalcode: string,
    totaldes: string,
    totalCre: string,
    totalearn: string,
    totalStatus: string,
    totoalGrade: string,
    totalTeam: string,

) {
    return { totalcode, totaldes, totalCre, totalearn, totalStatus, totoalGrade, totalTeam };
}

const FooterData1 = [
    createFooterData1('Total', "", "$ 32.00", "$ 0.00", "", "", ""),
];
const FooterData2 = [
    createFooterData1('Total', "", "$ 60.00", "$ 0.00", "", "", ""),
];
const FooterData3 = [
    createFooterData1('Total', "", "$ 32.00", "$ 0.00", "", "", ""),
];





interface Data {
    CourseCode: string,
    CourseDescription: string,
    RequiredCredits: string,
    EarnedCredits: string,
    Status: string,
    Grade: string,
    Term: string,
}

function createData(
    CourseCode: string,
    CourseDescription: string,
    RequiredCredits: string,
    EarnedCredits: string,
    Status: string,
    Grade: string,
    Term: string,
): Data {
    return {
        CourseCode,
        CourseDescription,
        RequiredCredits,
        EarnedCredits,
        Status,
        Grade,
        Term,
    };
}

const rows1 = [
    createData('COM1101-H', 'Interpersonal Communications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('CRT1000', 'Critical Thinking', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('ENG1101-H', 'English Composition I', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('INT1108-H', 'Practical Computer Applications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('MTH1101-H', 'College Mathematics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('PSY1101-H', 'Organizational Dynamics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('PSY1103-H', 'Introduction to Psychology', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('SCI1101-H', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
];

const rows2 = [
    createData('BUS1105', 'Interpersonal Communications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1110', 'Critical Thinking', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1115', 'English Composition I', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1120', 'Practical Computer Applications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1125', 'College Mathematics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1130', 'Organizational Dynamics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2105', 'Introduction to Psychology', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2110', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2115', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2220', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2225', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2230', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2240', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2245', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2260', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
];


const rows3 = [
    createData('BUS1105', 'Interpersonal Communications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1110', 'Critical Thinking', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1115', 'English Composition I', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1120', 'Practical Computer Applications', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1125', 'College Mathematics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS1130', 'Organizational Dynamics', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2105', 'Introduction to Psychology', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2110', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2115', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2220', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2225', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2230', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2240', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2245', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
    createData('BUS2260', 'Environmental Science', '$4.00', '$0.00', 'Future', "--", "--"),
];



function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'CourseCode',
        numeric: false,
        disablePadding: true,
        label: 'Course Code',
    },
    {
        id: 'CourseDescription',
        numeric: true,
        disablePadding: false,
        label: 'Course Description',
    },
    {
        id: 'RequiredCredits',
        numeric: true,
        disablePadding: false,
        label: 'Required Credits',
    },
    {
        id: 'EarnedCredits',
        numeric: true,
        disablePadding: false,
        label: 'Earned Credits',
    },
    {
        id: 'Status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'Grade',
        numeric: true,
        disablePadding: false,
        label: 'Grade',
    },
    {
        id: 'Term',
        numeric: true,
        disablePadding: false,
        label: 'Term',
    },

];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}



export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('CourseDescription');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(100);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const visibleRows1 = React.useMemo(
        () =>
            stableSort(rows1, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );

    const visibleRows2 = React.useMemo(
        () =>
            stableSort(rows2, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );

    const visibleRows3 = React.useMemo(
        () =>
            stableSort(rows3, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );


    return (
        <>
            <Box className="academicAccountWrap">

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

                <Box className="coursesCardWrap">
                    <Container maxWidth="xl">
                        <Box className="coursesCard">
                            <Grid container spacing={4}>
                                <Grid lg={12}>
                                    <Box className="studentDetailCard">
                                        <Box className="heading">
                                            <h3>Student Details</h3>
                                            <Box className="otherText">
                                                <Button variant="outlined"><LocalPrintshopOutlinedIcon /><Typography component='span'> Print</Typography></Button>
                                            </Box>
                                        </Box>
                                        <Box className="studentCardListing" >
                                            <Grid container spacing={3} >
                                                <Grid xl={3} lg={2} md={6}>
                                                    <Grid container spacing={3}>
                                                        <Grid lg={12} md={12} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Student# :</Typography>
                                                                <Typography component='p'>13256901</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid lg={12} md={12} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Start Date :</Typography>
                                                                <Typography component='p'>07/03/2023</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid xl={6} lg={8} md={6} >
                                                    <Grid container spacing={3}>
                                                        <Grid lg={6} md={7} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Current Status :</Typography>
                                                                <Typography component='p'>Enroll - Being Processed</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid lg={6} md={5} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Financial Aid Advisor :</Typography>
                                                                <Typography component='p'>-</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid lg={6} md={7} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Campus :</Typography>
                                                                <Typography component='p'>ONL - Miller Motte Online Programs</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid lg={6} md={5} xs={12} p={0}>
                                                            <Box className="studentCardList">
                                                                <Typography component='span' className="profileTextTitle">Advisor Email :</Typography>
                                                                <Typography component='p'>-</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid xl={3} lg={2} md={12}>
                                                    <Box className="studentCardList">
                                                        <Typography component='span' className="profileTextTitle">Balance :</Typography>
                                                        <Typography component='p'>0.00</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>

                <Box className="academicTableWrap">
                    <Container maxWidth='xl'>
                        <TableContainer className="academicTableInner"  >
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow className="tableHeading">
                                        <TableCell>Program</TableCell>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>School Status</TableCell>
                                        <TableCell>Enroll Status</TableCell>
                                        <TableCell>Shift</TableCell>
                                        <TableCell>Credit Req'd</TableCell>
                                        <TableCell>Completed</TableCell>
                                        <TableCell>GPA</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {academicDataTable.map((row) => (
                                        <TableRow
                                            key={row.program}
                                            className="tableContant"
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.program}
                                            </TableCell>
                                            <TableCell>{row.startDate}</TableCell>
                                            <TableCell>{row.schoolStatus}</TableCell>
                                            <TableCell>{row.enrollStatus}</TableCell>
                                            <TableCell>{row.shift}</TableCell>
                                            <TableCell>{row.credit}</TableCell>
                                            <TableCell>{row.completed}</TableCell>
                                            <TableCell>{row.gpa}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Box className="tableInnerTable">
                                <Scrollbars className='cutomScroll' autoHide hideTracksWhenNotNeeded style={{ height: 750}}>

                                    <Box className="tableInnerWrap">
                                        <Accordion defaultExpanded={true} >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className="accordianTitle"
                                            >
                                                <Box >
                                                    <Typography component="strong">Category: GER - General Education Requirements</Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails className='accDetail' >
                                                <Box >
                                                    <Paper>
                                                        <TableContainer >
                                                            <Table>
                                                                <EnhancedTableHead
                                                                    order={order}
                                                                    orderBy={orderBy}
                                                                    onRequestSort={handleRequestSort}
                                                                    rowCount={rows1.length}
                                                                />
                                                                <TableBody>
                                                                    {visibleRows1.map((row) => {
                                                                        return (
                                                                            <TableRow
                                                                                hover
                                                                                role="checkbox"
                                                                                tabIndex={-1}
                                                                                key={row.CourseCode}
                                                                                sx={{ cursor: 'pointer' }}
                                                                            >
                                                                                <TableCell>{row.CourseCode}</TableCell>
                                                                                <TableCell>{row.CourseDescription}</TableCell>
                                                                                <TableCell>{row.RequiredCredits}</TableCell>
                                                                                <TableCell>{row.EarnedCredits}</TableCell>
                                                                                <TableCell>{row.Status}</TableCell>
                                                                                <TableCell>{row.Grade}</TableCell>
                                                                                <TableCell>{row.Term}</TableCell>
                                                                            </TableRow>
                                                                        );
                                                                    })}
                                                                </TableBody>
                                                                <TableFooter>
                                                                    {FooterData1.map((row) => (
                                                                        <TableRow
                                                                            key={row.totalcode}
                                                                            className="tableContant"
                                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                        >
                                                                            <TableCell component="th" scope="row">
                                                                                {row.totalcode}
                                                                            </TableCell>
                                                                            <TableCell>{row.totaldes}</TableCell>
                                                                            <TableCell>{row.totalCre}</TableCell>
                                                                            <TableCell>{row.totalearn}</TableCell>
                                                                            <TableCell>{row.totalStatus}</TableCell>
                                                                            <TableCell>{row.totoalGrade}</TableCell>
                                                                            <TableCell>{row.totalTeam}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableFooter>
                                                            </Table>
                                                        </TableContainer>
                                                    </Paper>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                    <Box className="tableInnerWrap">
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className="accordianTitle"
                                            >
                                                <Box>
                                                    <Typography component="strong">Category: MARR - Major and Related Requirements</Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails className='accDetail'>
                                                <Box>
                                                    <Paper>
                                                        <TableContainer>
                                                            <Table>
                                                                <EnhancedTableHead
                                                                    order={order}
                                                                    orderBy={orderBy}
                                                                    onRequestSort={handleRequestSort}
                                                                    rowCount={rows2.length}
                                                                />
                                                                <TableBody>
                                                                    {visibleRows2.map((row) => {

                                                                        return (
                                                                            <TableRow
                                                                                hover
                                                                                role="checkbox"
                                                                                tabIndex={-1}
                                                                                key={row.CourseCode}
                                                                                sx={{ cursor: 'pointer' }}
                                                                            >
                                                                                <TableCell>{row.CourseCode}</TableCell>
                                                                                <TableCell>{row.CourseDescription}</TableCell>
                                                                                <TableCell>{row.RequiredCredits}</TableCell>
                                                                                <TableCell>{row.EarnedCredits}</TableCell>
                                                                                <TableCell>{row.Status}</TableCell>
                                                                                <TableCell>{row.Grade}</TableCell>
                                                                                <TableCell>{row.Term}</TableCell>
                                                                            </TableRow>
                                                                        );
                                                                    })}
                                                                </TableBody>
                                                                <TableFooter>
                                                                    {FooterData2.map((row) => (
                                                                        <TableRow
                                                                            key={row.totalcode}
                                                                            className="tableContant"
                                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                        >
                                                                            <TableCell component="th" scope="row">
                                                                                {row.totalcode}
                                                                            </TableCell>
                                                                            <TableCell>{row.totaldes}</TableCell>
                                                                            <TableCell>{row.totalCre}</TableCell>
                                                                            <TableCell>{row.totalearn}</TableCell>
                                                                            <TableCell>{row.totalStatus}</TableCell>
                                                                            <TableCell>{row.totoalGrade}</TableCell>
                                                                            <TableCell>{row.totalTeam}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableFooter>
                                                            </Table>
                                                        </TableContainer>
                                                    </Paper>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                    <Box className="tableInnerWrap">
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className="accordianTitle"
                                            >
                                                <Box>
                                                    <Typography component="strong">Category: ORIENT - Orientation Classes</Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails className='accDetail'>
                                                <Box>
                                                    <Paper>
                                                        <TableContainer>
                                                            <Table>
                                                                <EnhancedTableHead
                                                                    order={order}
                                                                    orderBy={orderBy}
                                                                    onRequestSort={handleRequestSort}
                                                                    rowCount={rows3.length}
                                                                />
                                                                <TableBody>
                                                                    {visibleRows3.map((row) => {
                                                                        return (
                                                                            <TableRow
                                                                                hover
                                                                                role="checkbox"
                                                                                tabIndex={-1}
                                                                                key={row.CourseCode}
                                                                                sx={{ cursor: 'pointer' }}
                                                                            >
                                                                                <TableCell>{row.CourseCode}</TableCell>
                                                                                <TableCell>{row.CourseDescription}</TableCell>
                                                                                <TableCell>{row.RequiredCredits}</TableCell>
                                                                                <TableCell>{row.EarnedCredits}</TableCell>
                                                                                <TableCell>{row.Status}</TableCell>
                                                                                <TableCell>{row.Grade}</TableCell>
                                                                                <TableCell>{row.Term}</TableCell>
                                                                            </TableRow>
                                                                        );
                                                                    })}
                                                                </TableBody>
                                                                <TableFooter>
                                                                    {FooterData3.map((row) => (
                                                                        <TableRow
                                                                            key={row.totalcode}
                                                                            className="tableContant"
                                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                        >
                                                                            <TableCell component="th" scope="row">
                                                                                {row.totalcode}
                                                                            </TableCell>
                                                                            <TableCell>{row.totaldes}</TableCell>
                                                                            <TableCell>{row.totalCre}</TableCell>
                                                                            <TableCell>{row.totalearn}</TableCell>
                                                                            <TableCell>{row.totalStatus}</TableCell>
                                                                            <TableCell>{row.totoalGrade}</TableCell>
                                                                            <TableCell>{row.totalTeam}</TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableFooter>
                                                            </Table>
                                                        </TableContainer>
                                                    </Paper>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>

                                </Scrollbars>
                            </Box>

                        </TableContainer>
                    </Container>
                </Box>

            </Box >
        </>
    );
}