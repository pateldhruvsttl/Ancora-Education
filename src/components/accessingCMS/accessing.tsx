import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from '@mui/material/Box/Box';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import './accessing.scss';
import '../userprofile/userprofile.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function accessing() {

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
            Accessing My 1098-T
        </Typography>,
    ];

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


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

                <Box className="contantWrap">
                    <Container maxWidth="xl">
                        <Box className="contentBox">
                            <Box className="heading">
                                <Typography component='h3'>1098T Forms are available</Typography>
                            </Box>
                            <Box className="contentText">
                                <Typography component="h6"><Typography component="strong">We are pleased to announce that the 2022 1098Ts are now available!</Typography></Typography>
                                <List className='ContentListing'>
                                    <ListItem>
                                        <Typography component='span'>Electronic Delivery</Typography>
                                        <Typography component='p'>
                                            If you signed up for electronic delivery before January 1st 2023, then your 1098T has been sent to the email address you provided- please be sure to check your spam folder.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography component='span'>Traditional Mail Delivery</Typography>
                                        <Typography component='p'>
                                            If you did not sign up for electronic delivery, then the hardcopy will be mailed to the address we have on file by January 31st.
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography component='span'>Heartland ECSI</Typography>
                                        <Typography component='p'>
                                            provides students the ability to easily access and view their 2022 1098T forms online at: https://heartland.ecsi.net

                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography component='span'>Student Portal Access</Typography>
                                        <Typography component='p'>
                                            1098T Forms can also be accessed through the student portal- My Finances &gt; 1098T- you will be directed to ECSI’s website
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}



export default accessing