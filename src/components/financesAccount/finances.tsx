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


import FinancialTool from '../../assets/images/financial-tools-icon.png';
import LoanCalculator from '../../assets/images/loan-calculator-icon.png';
import LoanPayment from '../../assets/images/loan-repayment-icon.png';





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
    Balance: string,

) {
    return { program, startDate, schoolStatus, Balance };
}

const academicDataTable = [
    createAcademinTable('AAS Business Administration', " 10 / 17 / 2022", "Enroll - Being Processed", "$0.00"),
];



function createFooterData1(
    totalCategory: string,
    totalTotalCharged: string,
    totalTotalCreditAdj: string,
    totalPaymentApplied: string,
    totalCategoryBalance: string,

) {
    return { totalCategory, totalTotalCharged, totalTotalCreditAdj, totalPaymentApplied, totalCategoryBalance};
}

const FooterData1 = [
    createFooterData1('Total', "$ 0.00", "$ 0.00", "$ 0.00", "$ 0.00"),
];
const FooterData2 = [
    createFooterData1('Total', "$ 0.00", "$ 0.00", "$ 0.00", "$ 0.00"),
];





interface Data {
    Category: string,
    TotalCharged: string,
    TotalCreditAdj: string,
    PaymentApplied: string,
    CategoryBalance: string,
}

function createData(
    Category: string,
    TotalCharged: string,
    TotalCreditAdj: string,
    PaymentApplied: string,
    CategoryBalance: string,
): Data {
    return {
        Category,
        TotalCharged,
        TotalCreditAdj,
        PaymentApplied,
        CategoryBalance,
    };
}

const rows1 = [
    createData('UNAPPLIED', '$ 0.00', '$0.00', '--', '--'),
];

const rows2 = [
    createData('---', '---', '---', '---', '---'),
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
        id: 'Category',
        numeric: false,
        disablePadding: true,
        label: 'Category',
    },
    {
        id: 'TotalCharged',
        numeric: true,
        disablePadding: false,
        label: 'Total Charged',
    },
    {
        id: 'TotalCreditAdj',
        numeric: true,
        disablePadding: false,
        label: 'Total Credit Adj',
    },
    {
        id: 'PaymentApplied',
        numeric: true,
        disablePadding: false,
        label: 'Payment Applied',
    },
    {
        id: 'CategoryBalance',
        numeric: true,
        disablePadding: false,
        label: 'Category Balance',
    }

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
    const [orderBy, setOrderBy] = React.useState<keyof Data>('Category');
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


    const Rows1 = React.useMemo(
        () =>
            stableSort(rows1, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );

    const Rows2 = React.useMemo(
        () =>
            stableSort(rows2, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );




    return (
        <>
            <Box className="academicAccountWrap  financeWrap">

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

                <Box className="studentCards">
                    <Container maxWidth="xl">
                        <Grid container spacing={4}>
                            <Grid lg={6} md={12}>
                                <Box className="studentDetailCard">
                                    <Box className="heading">
                                        <h3>Student Details</h3>
                                        <Box className="otherText">
                                            <Button variant="outlined"><LocalPrintshopOutlinedIcon /><Typography component='span'> Print</Typography></Button>
                                        </Box>
                                    </Box>
                                    <Box className="studentCardListing">
                                        <Grid container spacing={3} >
                                            <Grid lg={4} md={4}>
                                                <Grid container spacing={3}>
                                                    <Grid lg={12} p={0}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Student# :</Typography>
                                                            <Typography component='p'>13256901</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid lg={12} p={0}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Start Date :</Typography>
                                                            <Typography component='p'>07/03/2023</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid lg={8}  md={8}>
                                                <Grid container spacing={3}>
                                                    <Grid lg={6} p={0} md={6} sm={6} xs={12}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Current Status :</Typography>
                                                            <Typography component='p'>Enroll - Being Processed</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid lg={6} p={0} md={6} sm={6} xs={12}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Financial Aid Advisor :</Typography>
                                                            <Typography component='p'>-</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid lg={6} p={0} md={6} sm={6} xs={12}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Campus :</Typography>
                                                            <Typography component='p'>ONL - Miller Motte Online Programs</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid lg={6} p={0} md={6} sm={6} xs={12}>
                                                        <Box className="studentCardList">
                                                            <Typography component='span' className="profileTextTitle">Advisor Email :</Typography>
                                                            <Typography component='p'>-</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid lg={12}>
                                                <Box className="studentCardList">
                                                    <Typography component='span' className="profileTextTitle">Balance :</Typography>
                                                    <Typography component='p'>0.00</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid lg={6} md={12}>
                                <Box className="financeToolCard">
                                    <Box className="heading">
                                        <h3>Financial Tools</h3>
                                    </Box>
                                    <Box className="financeListing">
                                        <Grid container spacing={3}  >
                                            <Grid lg={4} p={0} md={4} sm={12}>
                                                <Box className="financeList">
                                                    <Box className="financeIcon">
                                                        <img src={LoanCalculator} alt="Financial Tool" />
                                                    </Box>
                                                    <Typography component="p">
                                                        Access the Loan Payment Calculator to estimate your out of school monthly loan payments.
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid lg={4} p={0} md={4} sm={12}>
                                                <Box className="financeList">
                                                    <Box className="financeIcon">
                                                        <img src={LoanPayment} alt="Loan Payment" />
                                                    </Box>
                                                    <Typography component="p">
                                                        Explore your options for loan repayment and managing your student debt.
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid lg={4} p={0} md={4} sm={12}>
                                                <Box className="financeList">
                                                    <Box className="financeIcon">
                                                        <img src={FinancialTool} alt="Financial Tool" />
                                                    </Box>
                                                    <Typography component="p">
                                                        Access free financial tools to create a budget, track progress toward a goal and learn to manage money wisely.
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
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
                                        <TableCell>Balance</TableCell>
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
                                            <TableCell>{row.Balance}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Box className="tableInnerTable">
                                <Scrollbars className='cutomScroll' autoHide hideTracksWhenNotNeeded style={{ height: 460 }}>

                                    <Box className="tableInnerWrap">
                                        <Box className="tableTopHeading">
                                            <Typography component="h3">Personal Information</Typography>
                                        </Box>
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
                                                            {Rows1.map((row) => {
                                                                return (
                                                                    <TableRow
                                                                        hover
                                                                        role="checkbox"
                                                                        tabIndex={-1}
                                                                        key={row.Category}
                                                                        sx={{ cursor: 'pointer' }}
                                                                    >
                                                                        <TableCell>{row.Category}</TableCell>
                                                                        <TableCell>{row.TotalCharged}</TableCell>
                                                                        <TableCell>{row.TotalCreditAdj}</TableCell>
                                                                        <TableCell>{row.PaymentApplied}</TableCell>
                                                                        <TableCell>{row.CategoryBalance}</TableCell>
                                                                    </TableRow>
                                                                );
                                                            })}
                                                        </TableBody>
                                                        <TableFooter>
                                                            {FooterData1.map((row) => (
                                                                <TableRow
                                                                    key={row.totalCategory}
                                                                    className="tableContant"
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {row.totalCategory}
                                                                    </TableCell>
                                                                    <TableCell>{row. totalTotalCharged}</TableCell>
                                                                    <TableCell>{row.totalTotalCreditAdj}</TableCell>
                                                                    <TableCell>{row.totalPaymentApplied}</TableCell>
                                                                    <TableCell>{row.totalCategoryBalance}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableFooter>
                                                    </Table>
                                                </TableContainer>
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box className="tableInnerWrap">
                                        <Box className="tableTopHeading">
                                            <Typography component="h3">Ledger card</Typography>
                                        </Box>
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
                                                            {Rows2.map((row) => {
                                                                return (
                                                                    <TableRow
                                                                        hover
                                                                        role="checkbox"
                                                                        tabIndex={-1}
                                                                        key={row.Category}
                                                                        sx={{ cursor: 'pointer' }}
                                                                    >
                                                                        <TableCell>{row.Category}</TableCell>
                                                                        <TableCell>{row.TotalCharged}</TableCell>
                                                                        <TableCell>{row.TotalCreditAdj}</TableCell>
                                                                        <TableCell>{row.PaymentApplied}</TableCell>
                                                                        <TableCell>{row.CategoryBalance}</TableCell>
                                                                    </TableRow>
                                                                );
                                                            })}
                                                        </TableBody>
                                                        <TableFooter>
                                                            {FooterData2.map((row) => (
                                                                <TableRow
                                                                    key={row.totalCategory}
                                                                    className="tableContant"
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {row.totalCategory}
                                                                    </TableCell>
                                                                    <TableCell>{row.totalTotalCharged}</TableCell>
                                                                    <TableCell>{row.totalTotalCreditAdj}</TableCell>
                                                                    <TableCell>{row.totalPaymentApplied}</TableCell>
                                                                    <TableCell>{row.totalCategoryBalance}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableFooter>
                                                    </Table>
                                                </TableContainer>
                                            </Paper>
                                        </Box>
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