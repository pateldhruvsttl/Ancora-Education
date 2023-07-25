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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Courses() {

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
            My Courses
        </Typography>,
    ];

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <Box className="coursesWrap">

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

                <Box className='alertGrp' p={0}>
                    <Alert severity="error"><Typography component="strong">Note :</Typography > To access courses linked below please make sure you are logged into your student email address. If you receive an error message log out of all google accounts and try again. Click HERE for a How-to-Guide.</Alert>
                </Box>

                <Box className="coursesInnerCard">
                    <Container maxWidth="xl">
                        <Box className="coursesInnerWrap">
                            <Box className="heading">
                                <Typography component="h3">My Courses</Typography>
                                <Box className="courseBtn">
                                    <Typography component="a" href='#'>All Course</Typography>
                                </Box>
                            </Box>
                            <Box className="coursesUl">
                                <List>
                                    <ListItem>Current Classes (click on name to enter online course)</ListItem>
                                    <ListItem>Upcoming Classes (click on name to enter online course)</ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Container>
                </Box>

            </Box>
        </>

    )

}
export default Courses