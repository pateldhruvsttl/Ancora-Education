import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box/Box';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import '../PerfectInterview/PerfectInterview.scss'
import '../userprofile/userprofile.scss';
import Grid from '@mui/material/Unstable_Grid2';
import Mail from '../../assets/icons/Mail';
import PerfectInterviewLogo from '../../assets/images/PerfectInterview.png';
import Pdf from '../../assets/icons/Pdf';

function perfectinterview() {

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

    const ListData = ['Electronic Delivery', 'Traditional Mail Delivery', 'Heartland ECSI', 'Student Portal Access'];
    const ListText = ['If you signed up for electronic delivery before January 1st 2023, then your 1098T has been sent to the email address you provided- please be sure to check your spam folder.', 'If you did not sign up for electronic delivery, then the hardcopy will be mailed to the address we have on file by January 31st.', 'provides students the ability to easily access and view their 2022 1098T forms online at: https://heartland.ecsi.net', ' 1098T Forms can also be accessed through the student portal- My Finances > 1098T- you will be directed to ECSI’s website'];



    return (
        <>
            <Box className="accessingWrap">
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
                <Box className="contantWrap perfect-interview">
                    <Container maxWidth="xl">
                        <Box className="contentBox">
                            <Box className="">
                                <Box className="heading">
                                    <Typography component='h3'>Perfect Interview</Typography>
                                </Box>
                                <Box className="logo-with-text">
                                    <Grid container spacing={0}>
                                        <Grid lg={12}>
                                            <Box className="box-border">
                                                <Grid container spacing={0} p={0}>
                                                    <Grid className="" lg={3} md={4} xs={12}>
                                                        <Box className="logo-perfectinterview">
                                                            <img src={PerfectInterviewLogo} alt="Perfect Interview" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid className="text-perfectinterview" lg={9} md={8} xs={12}>
                                                        <Box className="text-left">
                                                            <Typography component='p'>Perfect Interview provides a media library of 1,800 interview questions, answers, and tutorials. When you log on, you select the type of interview you want to take and Perfect Interview™ does the rest! </Typography>
                                                            <Typography component='p'>A professional interviewer appears on your computer screen and asks questions based upon your profile. You must answer each question on the spot. You can record your answers with any webcam*, and play them back for immediate feedback. And, you can even upload your completed interviews to our server, where you can share them with others, including potential employers.</Typography>
                                                        </Box>
                                                    </Grid>

                                                </Grid>

                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className="title-with-text">
                                    <Grid container spacing={0}>
                                        <Grid lg={12}>
                                            <Box className="box-border">
                                                <Grid container spacing={0} p={0}>
                                                    <Grid className="" lg={12} md={12} xs={12}>
                                                        <Box className="text-left">
                                                            <Typography component='strong' className='heading font-24'>To access the service </Typography>
                                                            <Typography component='div'>
                                                                <Typography component='p'>To access the site, please click the link: <Typography component='a' href="#" >http://www.perfectinterview.com/mmc</Typography> </Typography>
                                                                <Typography component='p'> When you access that page, you will see instructions for creating a user account. Upon creating an account, an email will be mailed with the user ID and password. You can then use that ID and password to log on to Perfect Interview On-line from the MMCO Student Portal.</Typography>
                                                                <Typography component='p' className='text-with-icon'><Pdf /><Typography component='a' href='#'>http://www.perfectinterview.com/online/online_guide.pdf</Typography> </Typography>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className="icon-with-links">
                                    <Grid container spacing={0}>
                                        <Grid lg={12}>
                                            <Box className="text-left">
                                                <Typography component='strong' className='heading font-24'>Support Options</Typography>
                                                <Typography component='div' className='text-left'>
                                                    <Typography component='p'>If you are having difficulty logging into the site, please contact a member of the career services staff.</Typography>
                                                </Typography>
                                                <Grid className="icon-box-wrap" container lg={12} spacing={0} p={0}>
                                                    <Grid className="icon-box-auto">
                                                        <Box className="text-left">
                                                            <Typography component='strong' className='heading font-18'>Laurie Lewis</Typography>
                                                            <Typography component='p' className='text-with-icon'><Mail /><Typography component='a' href='#'>laurie.lewis@miller-motte.edu</Typography> </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className="icon-box-auto">
                                                        <Box className="text-left">
                                                            <Typography component='strong' className='heading font-18'>Loree Ballenberger</Typography>
                                                            <Typography component='p' className='text-with-icon'><Mail /><Typography component='a' href='#'>loree.ballenberger@miller-motte.edu</Typography> </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className="icon-box-auto">
                                                        <Box className="text-left">
                                                            <Typography component='strong' className='heading font-18'>Carole Dempsey</Typography>
                                                            <Typography component='p' className='text-with-icon'><Mail /><Typography component='a' href='#'>carole.dempsey@miller-motte.edu</Typography> </Typography>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>

                    </Container>
                </Box>
            </Box>
        </>
    )
}




export default perfectinterview