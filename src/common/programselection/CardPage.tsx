

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Style from './CardPageStyle';
import './ProgramTab.scss'
import { Checkbox } from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function CardPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={Style.gridCal}>
                    <Grid container spacing={4}>
                        {cardDetail.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
                                <Card sx={Style.cardCal}>
                                    <CardMedia
                                        component="img"
                                        sx={Style.cardPicture}
                                        image="https://fashinza.com/textile/wp-content/uploads/2023/01/Business-administration.jpg"
                                        alt="random"
                                    />
                                    <CardContent sx={{...Style.cardContent,...Style.addCardBottomSpace}}>
                                        <Typography sx={Style.cardHeader}>{card.heading}</Typography>
                                        <Typography sx={Style.cardSubHeader}>{card.subHeading}</Typography>
                                        <Typography sx={Style.cardParagraph}>{card.detail}</Typography>
                                    </CardContent>
                                    <CardContent sx={Style.cardContent}>
                                        <Typography sx={Style.hourCost}>
                                            {`Program Cost : ${card.programCost}`}</Typography>
                                        <Typography sx={Style.hourCost}>
                                            {`Program Hours : ${card.programHours}`}</Typography>
                                        <Typography sx={Style.hourCost}>
                                            {`Credit Hours : ${card.creditHours}`}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing={true} sx={Style.cardButtons}>
                                        <Button sx={{ ...Style.financePlan, ...Style.addCommonBtn }} size="small">College Finance Plan</Button>
                                        <Button sx={{ ...Style.planSelect, ...Style.addCommonBtn }} size="small"><Checkbox sx={Style.checkBox}/>Select</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}

const cardDetail = [
    {
        heading: 'Business Administration',
        subHeading: 'Associate of Applied Science',
        detail: 'The Business Administration program provides education for the person seeking an entry-level career in business administration. Students are provided an opportunity to establish a solid foundation in administration and management; customer service; economics and accounting; sales and marketing; project management; and entrepreneurship.',
        programCost: '$32,240.00',
        programHours: '960.0',
        creditHours: '92.0'

    },
    {
        heading: 'Mid Start Accounting',
        subHeading: 'Bachelor of Science Degree',
        detail: 'The Accounting Bachelor of Science program prepares the graduate for entry-level employment in accounting related occupations in business and industry, including not-for-profit and governmental agencies.&nbsp; Accounting related occupations may include finance, insurance, accounting, auditing, tax preparation, bookkeeping, and payroll',
        programCost: '$32,240.00',
        programHours: '960.0',
        creditHours: '92.0'
    },
    {
        heading: 'Accounting',
        subHeading: 'Bachelor of Science Degree',
        detail: 'The Accounting Bachelor of Science program prepares the graduate for entry-level employment in accounting related occupations in business and industry, including not-for-profit and governmental agencies.&nbsp; Accounting related occupations may include finance, insurance, accounting, auditing, tax preparation, bookkeeping, and payroll',
        programCost: '$32,240.00',
        programHours: '960.0',
        creditHours: '92.0'
    }
]