
import './Footer.scss'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Footer() {
    return (
        <Container maxWidth="xl">
            <Box className='footer-container'>
                <Typography component='strong'>Copyright © 2023 ANCORA. All rights reserved.</Typography>
            </Box>
        </Container>
    )
}

export default Footer