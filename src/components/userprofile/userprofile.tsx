import React from 'react';
import "./userprofile.scss";
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import cardImage from "../../assets/images/userProfile.png"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import EditBtn from '../../assets/icons/Edit';
import EyeBtn from '../../assets/icons/eye';
import LeftArrow from '../../assets/icons/LeftArrow'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import GMail from '../../assets/images/imageGooleGmail.png';
import GDrive from '../../assets/images/imageGoogleDrive.png';
import GSlide from '../../assets/images/imageGoogleSlide.png';
import GDoc from '../../assets/images/imageGoogleDoc.png';
import GSheet from '../../assets/images/imageGoogleSheet.png';
import Paramount from '../../assets/images/paramout-capital-group-img.png';
import Phone from '../../assets/icons/Phone';
import Clock from '../../assets/icons/Clock';
import Map from "../../assets/icons/Map";
import Mail from '../../assets/icons/Mail';
import Scrollbars from "react-custom-scrollbars";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function userprofile() {


    function createDataTable1(
        document: string,
        status: string,
    ) {
        return { document, status };
    }
    const table1 = [
        createDataTable1('DOT Examination FAQ', "Required"),
        createDataTable1('AM - ASR Notice of Availability', "Required"),
        createDataTable1('AM - Criminal Background Screening', "Required",),
        createDataTable1('AM - High School GED Request Online', "Required"),
        createDataTable1('AM - PreEmploy Authorization', "Required"),
        createDataTable1('AM - Veterans Affairs Program Disclosure', "Required"),
        createDataTable1('DOT Examination FAQ', "Required"),
        createDataTable1('AM - ASR Notice of Availability', "Required"),
    ];


    function createDataTable2(
        survey: string,
        description: string,
    ) {
        return { survey, description }
    }
    const tabel2 = [
        createDataTable2('Lorem Ipsum is simply dummy text', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…'),
        createDataTable2('Lorem Ipsum is simply dummy text', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…'),
        createDataTable2('Lorem Ipsum is simply dummy text', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…'),
    ];


    return (
        <>
            <Box className="userProfileWrap">
                <Box className='alertGrp'>
                    <Alert severity="error"><Typography component="strong">Alert:</Typography > You have not completed the enrollment process. Complete your enrollment now!</Alert>
                    <Alert severity="error"><Typography component="strong">Alert:</Typography > Your program cost is due today. You will be withdrawn after the due date.</Alert>
                </Box>

                <Box className="profileWrap">
                    <Container maxWidth="xl">
                        <Box className="profileBox customGrid">
                            <Grid container spacing={4}>
                                <Grid lg={8} md={8}>
                                    <Card className="profileContent">
                                        <CardContent >
                                            <Grid container>
                                                <Grid lg={5} md={12} sm={12} xs={12}>
                                                    <Box className="profileInfo">
                                                        <Box className="cardImages">
                                                            <img src={cardImage} alt="profile" />
                                                        </Box>
                                                        <Box className="profileMemberName">
                                                            <Box className="greeting">
                                                                <Typography component="span">Hello!</Typography>
                                                                <Typography component="strong">William Edward</Typography>
                                                                <Typography component='p'>Student# : <Typography component='span'>13256901</Typography></Typography>
                                                            </Box>
                                                            <Box className="otherText">
                                                                <Button variant="outlined"> <EditBtn /> <Typography component='span'>Edit Profile</Typography></Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid lg={7} md={12} sm={12} xs={12}>
                                                    <Box className="profileTextListing">
                                                        <Grid container spacing={3} >
                                                            <Grid md={7} sm={7} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">Campus :</Typography>
                                                                    <Typography component='p'>ONL - Miller Motte Online Programs</Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={5} sm={5} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">GPA :</Typography>
                                                                    <Typography component='p'>0</Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={7} sm={7} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">Student Status :</Typography>
                                                                    <Typography component='p'>Enroll - Being Processed</Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={5} sm={5} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">Complete Credit Hours :</Typography>
                                                                    <Typography component='p'>0</Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={7} sm={7} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">Program :</Typography>
                                                                    <Typography component='p'>AAS Business Administration</Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid md={5} sm={5} xs={12}>
                                                                <Box className="profileTextList">
                                                                    <Typography component='span' className="profileTextTitle">Remaining Credit Hours :</Typography>
                                                                    <Typography component='p'>0</Typography>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>

                                    <Box className="tableWrap">
                                        <Box className="heading">
                                            <Typography component='h3'>Required Documents</Typography>
                                        </Box>
                                        <TableContainer className="table table1">
                                            <Scrollbars className='cutomScroll' autoHide hideTracksWhenNotNeeded style={{ height: 300, width: 920 }}>
                                                <Table size="small" aria-label="a dense table">
                                                    <TableHead>
                                                        <TableRow className="tableHeading">
                                                            <TableCell>Document</TableCell>
                                                            <TableCell align="right">Status</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {table1.map((row) => (
                                                            <TableRow
                                                                key={row.document}
                                                                className="tableContant"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell component="th" scope="row">
                                                                    {row.document}
                                                                </TableCell>
                                                                <TableCell align="right">{row.status}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Scrollbars>
                                        </TableContainer>
                                    </Box>
                                </Grid>
                                <Grid lg={4} md={4} sm={12} xs={12}>
                                    <Box className="calender">
                                        <Box className="heading">
                                            <Typography component='h3'>Announcements</Typography>
                                        </Box>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateCalendar dayOfWeekFormatter={(day) => `${day}`.toUpperCase()} />
                                        </LocalizationProvider>
                                        <Box className="tableContent">
                                            <Box className='inputFuild'>
                                                <Typography component='span'>Today</Typography>
                                                <Typography component='input' type="text" />
                                            </Box>
                                            <Box className='inputFuild'>
                                                <Typography component='span'>Tommorow</Typography>
                                                <Typography component='input' type="text" />
                                            </Box>
                                            <Typography component='a' href='#'>See full Schedule </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>My Resources</Typography>
                                                </Box>
                                                <Box className="myResourcesCard">
                                                    <Box className="resourceUl">
                                                        <List>
                                                            <ListItem>Office 365</ListItem>
                                                            <ListItem>Protect Your Account</ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box className="googleApp">
                                                        <Typography component='strong'>My Google Apps</Typography>
                                                        <List>
                                                            <ListItem><Typography component='a' href=""><img src={GMail}></img></Typography></ListItem>
                                                            <ListItem><Typography component='a' href=""><img src={GDrive}></img></Typography></ListItem>
                                                            <ListItem><Typography component='a' href=""><img src={GSlide}></img></Typography></ListItem>
                                                            <ListItem><Typography component='a' href=""><img src={GDoc}></img></Typography></ListItem>
                                                            <ListItem><Typography component='a' href=""><img src={GSheet}></img></Typography></ListItem>
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>My Payments</Typography>
                                                </Box>
                                                <Box className="paymentCard">
                                                    <Box className="patmentListing">
                                                        <Box className="patmentList">
                                                            <Typography component="span">Packaged Amount :</Typography>
                                                            <Typography component='strong'>$ 50</Typography>
                                                        </Box>
                                                        <Box className="patmentList">
                                                            <Typography component="span">Outstanding Balance :</Typography>
                                                            <Typography component='strong'>$ 50</Typography>
                                                        </Box>
                                                        <Box className="patmentList">
                                                            <Typography component="span">Minimum Payment Due :</Typography>
                                                            <Typography component='strong'>$ 00</Typography>
                                                        </Box>
                                                        <Box className="patmentList">
                                                            <Typography component="span">Payment Due Date :</Typography>
                                                            <Typography component='strong'>12/09/2023</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box className="cradBtn">
                                                        <Typography component='a' href="#" className="Btn">Make Payment <LeftArrow /></Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>My Bookstore</Typography>
                                                </Box>
                                                <Box className="bookStoreCard">
                                                    <Box className="storeCardText">
                                                        <Typography component='p'>To access the online bookstore please click the link below.</Typography>
                                                    </Box>
                                                    <Box className="cradBtn">
                                                        <Typography component='a' href="#" className="Btn">Access Bookstore <LeftArrow /></Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>My Campus</Typography>
                                                </Box>
                                                <Box className="campusCard">
                                                    <Box className="campusContent">
                                                        <Typography component="strong">ONL- Miller-Motte Online Programs (CHAT)</Typography>

                                                        <List>
                                                            <ListItem><Map /> 6397 Lee Highway #100, Chattanooga, TN 37421</ListItem>
                                                            <ListItem><Phone /> (423)510-9675</ListItem>
                                                            <ListItem><Clock /> 00 : 00</ListItem>
                                                        </List>
                                                    </Box>
                                                    <Box className="cradBtn">
                                                        <List>
                                                            <ListItem>Admission Rep:</ListItem>
                                                            <ListItem>Hector Morales-Gonzalez</ListItem>
                                                            <ListItem><Mail /><Typography component="a" href="mailto:Hector.Morales@miller-motte.edu">Hector.Morales@miller-motte.edu</Typography></ListItem>
                                                        </List>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>Tech Support</Typography>
                                                </Box>
                                                <Box className="supportCard">
                                                    <List>
                                                        <ListItem className="phone"><Phone /><Typography component='a' href="#"> 855-335-8248</Typography></ListItem>
                                                        <ListItem className="clock">< Clock /> <Typography component='p'><Typography component='span'>Monday - Friday: 8:00am - 12am EST</Typography>
                                                            <Typography component='span'>Saturday - Sunday: 9:00am - 6:00pm EST</Typography></Typography>
                                                        </ListItem>
                                                    </List>
                                                    <Box className="cradBtn">
                                                        <Typography component='a' href="#" className="Btn">Submit a Support Ticket <LeftArrow /></Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={4} md={6} sm={12} xs={12}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>Paramount Student Loans</Typography>
                                                </Box>
                                                <Box className="studentCard">
                                                    <Box className="studentContent">
                                                        <img src={Paramount}></img>
                                                        <Typography component='p'>To access Paramount Student Loans please click the link below. For information on how to use Paramount Student Loans, <Typography component="a" href="#">click HERE.</Typography> </Typography>
                                                    </Box>
                                                    <Box className="cradBtn">
                                                        <Typography component="a" href="#" className="Btn">Access Bookstore <LeftArrow /></Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid lg={8} md={8} sm={12} xs={12} order={{ sm: 2, lg: 1 }}>
                                    <Box className="tableWrap tabele2Wrap">
                                        <Box className="heading">
                                            <Typography component='h3'>My Survey</Typography>
                                        </Box>
                                        <TableContainer className="table table2">
                                            <Scrollbars className='cutomScroll' autoHide hideTracksWhenNotNeeded style={{ height: 300, width: 920 }}>
                                                <Table size="small" aria-label="a dense table">
                                                    <TableHead>
                                                        <TableRow className="tableHeading">
                                                            <TableCell>Survey</TableCell>
                                                            <TableCell align="left">Survey Description</TableCell>
                                                            <TableCell></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {tabel2.map((row) => (
                                                            <TableRow
                                                                key={row.survey}
                                                                className="tableContant"
                                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            >
                                                                <TableCell component="th" scope="row" vertical-align="top">
                                                                    {row.survey}
                                                                </TableCell>
                                                                <TableCell align="left" vertical-align="top">{row.description}</TableCell>
                                                                <TableCell align="left"><Typography component="a" href="#"><EyeBtn /></Typography></TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Scrollbars>
                                        </TableContainer>
                                    </Box>
                                </Grid>
                                <Grid lg={4} md={4} sm={12} xs={12} order={{ sm: 1, lg: 2 }}>
                                    <Card className="cardWrap">
                                        <CardContent>
                                            <Box className="cardInner">
                                                <Box className="heading">
                                                    <Typography component='h3'>Driver Profile</Typography>
                                                </Box>
                                                <Box className="ProfileCardContent">
                                                    <Typography component='p'>We've partnered with <Typography component="a" href="#">CDLcom</Typography> to give you access to important driver resources. With <Typography component="a" href="#">CDL.com</Typography> you can find the job you are looking for with top companies across the U.S. and create a driver profile to let them help you find your next job.</Typography>
                                                    <Typography component="strong">Driver profile benefits include:</Typography>
                                                    <List>
                                                        <ListItem>Access to recruiters hiring across the U.S.</ListItem>
                                                        <ListItem> Apply to more than one job with one click</ListItem>
                                                        <ListItem> Easily apply for jobs on your mobile device</ListItem>
                                                    </List>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container >
                </Box >

            </Box>
        </>
    )

}
export default userprofile