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
        My Finances
    </Link>,
    <Typography key="3" color="text.primary">
        My Financial Aid
    </Typography>,
];

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}




function createFooterData1(
    totalcode: string,
    totaldes: string,
    totalCre: string,
    totalearn: string,
    totalStatus: string,
    totoalGrade: string,

) {
    return { totalcode, totaldes, totalCre, totalearn, totalStatus, totoalGrade };
}

const FooterData1 = [
    createFooterData1('Total Funding', "$ 0.00", "$ 0.00", "$ 0.00", "$ 0.00", "$ 0.00"),
    createFooterData1('Term Balance', "$ 4,639.00", "$ 0.00", "$ 0.00", "", ""),
];
const FooterData2 = [
    createFooterData1('Total', "", "$ 60.00", "$ 0.00", "", ""),
];
const FooterData3 = [
    createFooterData1('Total', "", "$ 32.00", "$ 0.00", "", ""),
];

const FooterData4 = [
    createFooterData1('Total Funding', "$13,818.00", "$13,818.00", "$4,606.00", "$32,242.00", "$32,242.00"),
    createFooterData1('AY Balance', "$0.00", "$0.00", "$ 0.00", "$0.00", ""),
];



interface Data {
    Blank: string,
    Term1: string,
    Term2: string,
    Term3: string,
    TotalAcademic: string,
    GrossAmount: string,
}

function createData(
    Blank: string,
    Term1: string,
    Term2: string,
    Term3: string,
    TotalAcademic: string,
    GrossAmount: string,
): Data {
    return {
        Blank,
        Term1,
        Term2,
        Term3,
        TotalAcademic,
        GrossAmount,
    };
}

const rows1 = [
    createData('Tuition and Fees', '$ 4,606.00', '$ 4,606.00', '$ 4,606.00', '$ 4,639.00', "$ 13,837.00"),
    createData('Tuition Flex (Student Cash Payment)', '--', '--', '--', '--', "--")
];

const rows2 = [
    createData('Tuition and Fees', '$ 4,606.00', '$ 4,606.00', '$ 4,606.00', '$ 4,639.00', "$ 13,837.00"),
    createData('Tuition Flex (Student Cash Payment)', '--', '--', '--', '--', "--")
];

const rows3 = [
    createData('Tuition and Fees', '$ 4,606.00', '$ 4,606.00', '$ 4,606.00', '$ 4,639.00', "$ 13,837.00"),
    createData('Tuition Flex (Student Cash Payment)', '--', '--', '--', '--', "--")
];

const rows4 = [
    createData('Tuition and Fees', '$13,818.00', '$13,818.00', '$ 4,606.00', '$32,242.00', "$32,242.00"),
    createData('Federal Direct Subsidized Loan', '$0.00', '$0.00', '$0.00', '$0.00', "$0.00"),
    createData('Federal Direct Unubsidized Loan', '$0.00', '$0.00', '$0.00', '$0.00', "$0.00"),
    createData('Tuition Flex (Student Cash Payment)', '$13,818.00', '$13,818.00', '$ 4,606.00', '$32,242.00', "$32,242.00"),

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
        id: 'Blank',
        numeric: false,
        disablePadding: true,
        label: '',

    },
    {
        id: 'Term1',
        numeric: true,
        disablePadding: false,
        label: "Net Amount Term \n 10/17/2022 - 12/25/2022"
    },
    {
        id: 'Term2',
        numeric: true,
        disablePadding: false,
        label: 'Net Amount Term 2 \n 10/17/2022 - 12/25/2022',
    },
    {
        id: 'Term3',
        numeric: true,
        disablePadding: false,
        label: 'Net Amount Term 3 \n 1/09/2023 - 3/19/2023',
    },
    {
        id: 'TotalAcademic',
        numeric: true,
        disablePadding: false,
        label: 'Total Academic\n Year Net Amount',
    },
    {
        id: 'GrossAmount',
        numeric: true,
        disablePadding: false,
        label: 'Gross \n Amount',
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
    const [orderBy, setOrderBy] = React.useState<keyof Data>('Blank');
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

    const visibleRows4 = React.useMemo(
        () =>
            stableSort(rows4, getComparator(order, orderBy)).slice(
            ),
        [order, orderBy, page, rowsPerPage],
    );


    return (
        <>
            <Box className="academicAccountWrap finacialAidWrap">

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
                        <TableContainer className="academicTableInner">
                            <Box className="heading">
                                <Typography component="h3">My Financial Aid</Typography>
                            </Box>
                            <Box className="tableInnerTable">


                                <Box className="tableInnerWrap">
                                    <Accordion defaultExpanded={true} >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="accordianTitle"
                                        >
                                            <Box >
                                                <Typography component="strong">Academic Year 1: 08/08/2022 - 03/19/2023</Typography>
                                                <Typography component="span">Award Year: 2022-23</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails className='accDetail' >
                                            <Box className='InnerPaddingTabel'>
                                                <Paper>
                                                    <TableContainer>
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
                                                                            key={row.Blank}
                                                                            sx={{ cursor: 'pointer' }}
                                                                        >
                                                                            <TableCell align='left'>{row.Blank}</TableCell>
                                                                            <TableCell align='right'>{row.Term1}</TableCell>
                                                                            <TableCell align='right'>{row.Term2}</TableCell>
                                                                            <TableCell align='right'>{row.Term3}</TableCell>
                                                                            <TableCell align='right'>{row.TotalAcademic}</TableCell>
                                                                            <TableCell align='right'>{row.GrossAmount}</TableCell>
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
                                                                        <TableCell component="th" scope="row" align='right'>
                                                                            {row.totalcode}
                                                                        </TableCell>
                                                                        <TableCell align='right'>{row.totaldes}</TableCell>
                                                                        <TableCell align='right'>{row.totalCre}</TableCell>
                                                                        <TableCell align='right'>{row.totalearn}</TableCell>
                                                                        <TableCell align='right'>{row.totalStatus}</TableCell>
                                                                        <TableCell align='right'>{row.totoalGrade}</TableCell>

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
                                    <Accordion  >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="accordianTitle"
                                        >
                                            <Box >
                                                <Typography component="strong">Academic Year 1: 08/08/2022 - 03/19/2023</Typography>
                                                <Typography component="span">Award Year: 2022-23</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails className='accDetail' >
                                            <Box className='InnerPaddingTabel'>
                                                <Paper>
                                                    <TableContainer >
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
                                                                            key={row.Blank}
                                                                            sx={{ cursor: 'pointer' }}
                                                                        >
                                                                            <TableCell align='left'>{row.Blank}</TableCell>
                                                                            <TableCell align='right'>{row.Term1}</TableCell>
                                                                            <TableCell align='right'>{row.Term2}</TableCell>
                                                                            <TableCell align='right'>{row.Term3}</TableCell>
                                                                            <TableCell align='right'>{row.TotalAcademic}</TableCell>
                                                                            <TableCell align='right'>{row.GrossAmount}</TableCell>
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
                                                                        <TableCell component="th" scope="row" align='right'>
                                                                            {row.totalcode}
                                                                        </TableCell>
                                                                        <TableCell align='right'>{row.totaldes}</TableCell>
                                                                        <TableCell align='right'>{row.totalCre}</TableCell>
                                                                        <TableCell align='right'>{row.totalearn}</TableCell>
                                                                        <TableCell align='right'>{row.totalStatus}</TableCell>
                                                                        <TableCell align='right'>{row.totoalGrade}</TableCell>

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
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            className="accordianTitle"
                                        >
                                            <Box >
                                                <Typography component="strong">Academic Year 1: 08/08/2022 - 03/19/2023</Typography>
                                                <Typography component="span">Award Year: 2022-23</Typography>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails className='accDetail' >
                                            <Box className='InnerPaddingTabel'>
                                                <Paper>
                                                    <TableContainer >
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
                                                                            key={row.Blank}
                                                                            sx={{ cursor: 'pointer' }}
                                                                        >
                                                                            <TableCell align='left'>{row.Blank}</TableCell>
                                                                            <TableCell align='right'>{row.Term1}</TableCell>
                                                                            <TableCell align='right'>{row.Term2}</TableCell>
                                                                            <TableCell align='right'>{row.Term3}</TableCell>
                                                                            <TableCell align='right'>{row.TotalAcademic}</TableCell>
                                                                            <TableCell align='right'>{row.GrossAmount}</TableCell>
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
                                                                        <TableCell component="th" scope="row" align='right'>
                                                                            {row.totalcode}
                                                                        </TableCell>
                                                                        <TableCell align='right'>{row.totaldes}</TableCell>
                                                                        <TableCell align='right'>{row.totalCre}</TableCell>
                                                                        <TableCell align='right'>{row.totalearn}</TableCell>
                                                                        <TableCell align='right'>{row.totalStatus}</TableCell>
                                                                        <TableCell align='right'>{row.totoalGrade}</TableCell>

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

                                <Box className="tableInnerWrap ">
                                    <Box className="tableHeading">
                                        <Typography component="strong">Program Dates: 8/08/2022 - 12/24/2023</Typography>
                                    </Box>

                                    <Box className='InnerPaddingTabel'>
                                        <Paper>
                                            <TableContainer >
                                                <Table>
                                                    <TableHead className='tableHeading'>
                                                        <TableCell></TableCell>
                                                        <TableCell align='right'>Academic Year 1</TableCell>
                                                        <TableCell align='right'>Academic Year 2</TableCell>
                                                        <TableCell align='right'>Academic Year 3</TableCell>
                                                        <TableCell align='right'>Total Program<br />Net Amounts</TableCell>
                                                        <TableCell align='right'>Total Program <br /> Gross Amount</TableCell>
                                                    </TableHead>
                                                    <TableBody>
                                                        {visibleRows4.map((row) => {
                                                            return (
                                                                <TableRow
                                                                    hover
                                                                    role="checkbox"
                                                                    tabIndex={-1}
                                                                    key={row.Blank}
                                                                    sx={{ cursor: 'pointer' }}
                                                                >
                                                                    <TableCell align='left'>{row.Blank}</TableCell>
                                                                    <TableCell align='right'>{row.Term1}</TableCell>
                                                                    <TableCell align='right'>{row.Term2}</TableCell>
                                                                    <TableCell align='right'>{row.Term3}</TableCell>
                                                                    <TableCell align='right'>{row.TotalAcademic}</TableCell>
                                                                    <TableCell align='right'>{row.GrossAmount}</TableCell>
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </TableBody>
                                                    <TableFooter>
                                                        {FooterData4.map((row) => (
                                                            <TableRow
                                                                key={row.totalcode}
                                                                className="tableContant"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell component="th" scope="row" align='right'>
                                                                    {row.totalcode}
                                                                </TableCell>
                                                                <TableCell align='right'>{row.totaldes}</TableCell>
                                                                <TableCell align='right'>{row.totalCre}</TableCell>
                                                                <TableCell align='right'>{row.totalearn}</TableCell>
                                                                <TableCell align='right'>{row.totalStatus}</TableCell>
                                                                <TableCell align='right'>{row.totoalGrade}</TableCell>

                                                            </TableRow>
                                                        ))}
                                                    </TableFooter>
                                                </Table>
                                            </TableContainer>
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>
                        </TableContainer>
                    </Container >
                </Box >

            </Box >
        </>
    );
}