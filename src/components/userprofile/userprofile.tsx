import * as React from 'react';
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
import IcnDown from '../../assets/icons/IcnDown';
import Paramount from '../../assets/images/paramout-capital-group-img.png';
import Phone from '../../assets/icons/Phone';
import Clock from '../../assets/icons/Clock';
import Map from "../../assets/icons/Map";
import Mail from '../../assets/icons/Mail';
import Scrollbars from "react-custom-scrollbars";


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

            {/* <Scrollbars style={{ width: 500, height: 300 }}>
                <p>Some great content...</p>
            </Scrollbars> */}

            <div className="profileWrap">
                <Container maxWidth="xl">
                    <div className="profileBox customGrid">
                        <Grid container spacing={4}>
                            <Grid lg={8} md={8}>
                                <Card className="profileContent">
                                    <CardContent >
                                        <Grid container>
                                            <Grid lg={5} md={12} sm={12} xs={12}>
                                                <div className="profileInfo">
                                                    <div className="cardImages">
                                                        <img src={cardImage} alt="profile" />
                                                    </div>
                                                    <div className="profileMemberName">
                                                        <div className="greeting">
                                                            <span>Hello!</span>
                                                            <strong>William Edward</strong>
                                                            <p>Student# : <span>13256901</span></p>
                                                        </div>
                                                        <div className="otherText">
                                                            <Button variant="outlined"> <EditBtn /> <span>Edit Profile</span></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid lg={7} md={12} sm={12} xs={12}>
                                                <div className="profileTextListing">
                                                    <Grid container spacing={3} >
                                                        <Grid xs={7}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">Campus :</span>
                                                                <p>ONL - Miller Motte Online Programs</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={5}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">GPA :</span>
                                                                <p>0</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={7}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">Student Status :</span>
                                                                <p>Enroll - Being Processed</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={5}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">Complete Credit Hours :</span>
                                                                <p>0</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={7}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">Program :</span>
                                                                <p>AAS Business Administration</p>
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={5}>
                                                            <div className="profileTextList">
                                                                <span className="profileTextTitle">Remaining Credit Hours :</span>
                                                                <p>0</p>
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                                <div className="tableWrap">
                                    <div className="heading">
                                        <h3>Required Documents</h3>
                                    </div>
                                    <TableContainer className="table table1">
                                        <Scrollbars autoHide hideTracksWhenNotNeeded style={{ height: 300 }}>
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
                                </div>
                            </Grid>
                            <Grid lg={4} md={4} sm={12} xs={12}>
                                <div className="calender">
                                    <div className="heading">
                                        <h3>Announcements</h3>
                                    </div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar dayOfWeekFormatter={(day) => `${day}`.toUpperCase()} />
                                    </LocalizationProvider>
                                    <div className="tableContent">
                                        <div className='inputFuild'>
                                            <span>Today</span>
                                            <input type="text" />
                                        </div>
                                        <div className='inputFuild'>
                                            <span>Tommorow</span>
                                            <input type="text" />
                                        </div>
                                        <a href='#'>See full Schedule </a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>My Resources</h3>
                                            </div>
                                            <div className="myResourcesCard">
                                                <div className="resourceUl">
                                                    <ul>
                                                        <li>Office 365</li>
                                                        <li>Protect Your Account</li>
                                                    </ul>
                                                </div>
                                                <div className="googleApp">
                                                    <strong>My Google Apps</strong>
                                                    <ul>
                                                        <li><a href=""><img src={GMail}></img></a></li>
                                                        <li><a href=""><img src={GDrive}></img></a></li>
                                                        <li><a href=""><img src={GSlide}></img></a></li>
                                                        <li><a href=""><img src={GDoc}></img></a></li>
                                                        <li><a href=""><img src={GSheet}></img></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>My Payments</h3>
                                            </div>
                                            <div className="paymentCard">
                                                <div className="patmentListing">
                                                    <div className="patmentList">
                                                        <span>Packaged Amount :</span>
                                                        <strong>$ 50</strong>
                                                    </div>
                                                    <div className="patmentList">
                                                        <span>Outstanding Balance :</span>
                                                        <strong>$ 50</strong>
                                                    </div>
                                                    <div className="patmentList">
                                                        <span>Minimum Payment Due :</span>
                                                        <strong>$ 00</strong>
                                                    </div>
                                                    <div className="patmentList">
                                                        <span>Payment Due Date :</span>
                                                        <strong>12/09/2023</strong>
                                                    </div>
                                                </div>
                                                <div className="cradBtn">
                                                    <a href="#" className="Btn">Make Payment <IcnDown /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>My Bookstore</h3>
                                            </div>
                                            <div className="bookStoreCard">
                                                <div className="storeCardText">
                                                    <p>To access the online bookstore please click the link below.</p>
                                                </div>
                                                <div className="cradBtn">
                                                    <a href="#" className="Btn">Access Bookstore <IcnDown /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>My Campus</h3>
                                            </div>
                                            <div className="campusCard">
                                                <div className="campusContent">
                                                    <strong>ONL- Miller-Motte Online Programs (CHAT)</strong>

                                                    <ul>
                                                        <li><Map /> 6397 Lee Highway #100, Chattanooga, TN 37421</li>
                                                        <li><Phone /> (423)510-9675</li>
                                                        <li><Clock /> 00 : 00</li>
                                                    </ul>
                                                </div>
                                                <div className="cradBtn">
                                                    <ul>
                                                        <li>Admission Rep:</li>
                                                        <li>Hector Morales-Gonzalez</li>
                                                        <li><Mail /><a href="mailto:Hector.Morales@miller-motte.edu">Hector.Morales@miller-motte.edu</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>Tech Support</h3>
                                            </div>
                                            <div className="supportCard">
                                                <ul>
                                                    <li className="phone"><Phone /><a href="#"> 855-335-8248</a></li>
                                                    <li className="clock">< Clock /> <p><span>Monday - Friday: 8:00am - 12am EST</span>
                                                        <span>Saturday - Sunday: 9:00am - 6:00pm EST</span></p>
                                                    </li>
                                                </ul>
                                                <div className="cradBtn">
                                                    <a href="#" className="Btn">Submit a Support Ticket <IcnDown /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={4} md={6} sm={12} xs={12}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>Paramount Student Loans</h3>
                                            </div>
                                            <div className="studentCard">
                                                <div className="studentContent">
                                                    <img src={Paramount}></img>
                                                    <p>To access Paramount Student Loans please click the link below. For information on how to use Paramount Student Loans, <a href="#">click HERE.</a> </p>
                                                </div>
                                                <div className="cradBtn">
                                                    <a href="#" className="Btn">Access Bookstore <IcnDown /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid lg={8} md={8} sm={12} xs={12} order={{ sm: 2, lg: 1 }}>
                                <div className="tableWrap tabele2Wrap">
                                    <div className="heading">
                                        <h3>My Survey</h3>
                                    </div>
                                    <TableContainer className="table table2">
                                        <Scrollbars autoHide hideTracksWhenNotNeeded style={{ height: 300 }}>
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
                                                            <TableCell align="left"><a href="#"><EyeBtn /></a></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </Scrollbars>
                                    </TableContainer>
                                </div>
                            </Grid>
                            <Grid lg={4} md={4} sm={12} xs={12} order={{ sm: 1, lg: 2 }}>
                                <Card className="cardWrap">
                                    <CardContent>
                                        <div className="cardInner">
                                            <div className="heading">
                                                <h3>Driver Profile</h3>
                                            </div>
                                            <div className="ProfileCardContent">
                                                <p>We've partnered with <a href="#">CDLcom</a> to give you access to important driver resources. With <a href="#">CDL.com</a> you can find the job you are looking for with top companies across the U.S. and create a driver profile to let them help you find your next job.</p>
                                                <strong>Driver profile benefits include:</strong>
                                                <ul>
                                                    <li>Access to recruiters hiring across the U.S.</li>
                                                    <li> Apply to more than one job with one click</li>
                                                    <li> Easily apply for jobs on your mobile device</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Container >
            </div >
        </>
    )

}
export default userprofile